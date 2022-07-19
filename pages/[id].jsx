import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import SentimentChart from '../components/chart/SentimentChart';
import WhaleTokenDistribution from '../components/chart/WhaleTokenDistribution';
import { LineChart } from '../components/chart/LineChart';
import AOS from "aos";
import Fetches from '../components/actions';
import { useRouter } from 'next/router';

const balance = (balance) => {
  // return Number(balance)
  return balance / (10 ** 18)
}


const Details = () => {
  const { query } = useRouter();
  console.log("QUERY: ", query);

  const name = "UNISWAP" // This will be the name of the DAO selected
  
  const [daoAssets, setDaoAssets] = useState([])
  const [daoHistory, setDaoHistory] = useState([])
  const [latestTx, setLatestTx] = useState([])
  
  const fetchStuffs = async () => {
    const balance = await Fetches.get_doa_balance(query.chainid, query.id)
    setDaoAssets(balance);

    const history = await Fetches.get_historical_data(query.chainid, query.id) // DAO Last 15 Transactions
    setDaoHistory(history);
    
    const latest = await Fetches.get_doa_latest_trans(query.chainid, query.id) // DAO Last 15 Transactions
    setLatestTx(latest);
  }

  console.log(daoHistory);

  useEffect(() => {
    fetchStuffs()
  }, []);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={""}>
      <Head>
        <title>CoinDAO - {daoHistory?.contract_ticker_symbol}</title>
        <meta name="description" content={`This is a dao analysis app, it helps to show the analysis of ${daoHistory?.contract_ticker_symbol}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <Header />
          <div>
            <h3 data-aos="fade-down" className='title__details'>{daoHistory?.contract_ticker_symbol}</h3>

            <div className="line-chart">
              <div className="line__chart__back__drop">
                <img src="/duddle.svg" alt="" />
              </div>
              {
                [1,2,3,4,5].map((x, index) => {
                  return (
                    <div className="main__line__graph__container" key={index}>
                      <div className="main__line__graph__container__header">
                        <h1>KOIN Token</h1>
                      </div>
                      <LineChart />
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="list">
            <h3>Top 25 Token Holders</h3>

            <table style={{ width: '100%' }}>

              <thead className="list-head">
                <tr>
                  <th className=''>
                    S/N
                  </th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Balance</th>
                </tr>
              </thead>

              <tbody>
                {[1,2].slice(0,1).map((dao, index) => {
                  return (
                    <tr key={index}>
                      <td className='number'>
                        N/A
                      </td>
                      <td className='list-body-container'>
                        N/A
                      </td>
                      <td className=''>N/A</td>
                      <td className=''>N/A</td>
                    </tr>
                  )
                })}

              </tbody>

            </table>

          </div>

          <div className="list">
            <h3>DAO Last 15 Transactions</h3>

            <table style={{ width: '100%' }}>

              <thead className="list-head">
                <tr>
                  <th className=''>
                    S/N
                  </th>
                  <th>From</th>
                  <th>To</th>
                  {/* <th>Address</th> */}
                  <th>Fee paid</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {latestTx.slice(0,15).map((history, index) => {
                  return (
                    <tr key={index}>
                      <td className='number'>
                        {index + 1}
                      </td>
                      <td className=''>
                        <div>{history.from_address.substring(0, 6)}...{history.from_address.slice(-4)}</div>
                        <div>{history.from_address_label ? [history.from_address_label] : null }</div>
                      </td>
                      <td className=''>
                        <div>{history.to_address.substring(0, 6)}...{history.to_address.slice(-4)}</div>
                        <div>{history.to_address_label ? [history.to_address_label] : null }</div>
                      </td>
                      {/* <td className=''>{history.to_address}</td> */}
                      <td className=''>{history.fees_paid}</td>
                      <td className=''>{history.successful ? "Successful" : "Failed"}</td>
                    </tr>
                  )
                })}

              </tbody>

            </table>

          </div>

          <div className="list">
            <h3>DAO Assets</h3>

            <table style={{ width: '100%' }}>

              <thead className="list-head">
                <tr>
                  <th className=''>
                    S/N
                  </th>
                  <th>Token</th>
                  <th>Balance {" "}
                    <small>(wei)</small>
                  </th>
                  <th>Value</th>
                </tr>
              </thead>

              <tbody>
                {daoAssets.map((asset, index) => {
                  return (
                    <tr key={index}>
                      <td className='number'>
                        {index + 1}
                      </td>
                      <td className='list-body-container'>
                      <img src={asset.logo_url ? asset.logo_url : 'https://via.placeholder.com/300/09f/fff.png'} className="list-data-logo-img" style={{ marginRight: "10px" }} /><span>{asset.contract_name}</span>
                      </td>
                      <td className=''>
                        {asset.balance}
                      </td>
                      <td className=''>{asset.quote}</td>
                    </tr>
                  )
                })}

              </tbody>

            </table>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Details