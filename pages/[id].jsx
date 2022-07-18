import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import SentimentChart from '../components/chart/SentimentChart';
import WhaleTokenDistribution from '../components/chart/WhaleTokenDistribution';

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
        <meta name="description" content={`This is a dao analysis app, it helps tp show the analysis of ${name}`}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <Header />
          <div style={{height: "500px"}}>
            <h3 className='title'>{name}</h3>

            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum illo nobis eius veniam consequatur minus, facilis accusamus architecto dolore.</p>
          </div>


          <div className="details-analysis">

            <SentimentChart />
            <WhaleTokenDistribution />
            <SentimentChart />
          </div>

          <div className=''>
            <h3>Top 25 TOken Holders</h3>

            <div className="details-list">

            <div className="details-list-head">
                <div>S/N</div>
                <div>DAO</div>
                <div>Address</div>
                <div>Amount</div>
            </div>

            {daos.map(dao => {
                return (
                  <div className='details-list-data' key={dao.id}>
                      <div>{dao.id}</div>
                      <div>{dao.name}</div>
                      <div>{dao.address}</div>
                      <div>{dao.amount}</div>
                  </div>
                )
            })}
        </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Details