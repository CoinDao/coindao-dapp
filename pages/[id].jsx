import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import SentimentChart from '../components/chart/SentimentChart';
import WhaleTokenDistribution from '../components/chart/WhaleTokenDistribution';
import { LineChart } from '../components/chart/LineChart';

const daos = [
  {
    id: "1",
    name: "Buildspace",
    address: "0xAF323423BC89809C909E9090",
    amount: "250,000"
  },
  {
    id: "2",
    name: "Conventry",
    address: "0x24524ae089809f2323314113",
    amount: "350,000"
  },
  {
    id: "3",
    name: "Carillus",
    address: "0x324297a9809e908090990a90",
    amount: "300,000"
  },
  {
    id: "4",
    name: "Web3Bridge",
    address: "0x238992732e72398a98723893",
    amount: "500,000"
  },
  {
    id: "5",
    name: "Serillina",
    address: "0x2347689238ae098234234234",
    amount: "100,000"
  }
]

const Details = () => {
  const name = "UNISWAP" // This will be the name of the DAO selected

  return (
    <div className={""}>
      <Head>
        <title>CoinDAO - {name}</title>
        <meta name="description" content={`This is a dao analysis app, it helps tp show the analysis of ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <Header />
          <div>
            <h3 className='title'>{name}</h3>

            <div className="line-chart">
              {/* <LineChart /> */}

              {
                [1,2,3,4,5].map(x => {
                  return (
                    <div className="">
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
                {daos.slice(0,1).map((dao, index) => {
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
                  <th>Name</th>
                  <th>Address</th>
                  <th>Balance</th>
                </tr>
              </thead>

              <tbody>
                {daos.map((dao, index) => {
                  return (
                    <tr key={index}>
                      <td className='number'>
                        {index + 1}
                      </td>
                      <td className='list-body-container'>
                      <img src={dao.logo} className="list-data-logo-img" style={{ marginRight: "10px" }} /><span>{dao.name}</span>
                      </td>
                      <td className=''>{dao.address}</td>
                      <td className=''>{dao.amount}</td>
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