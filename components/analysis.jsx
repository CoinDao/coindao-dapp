import React, { Fragment } from 'react'
import SentimentAnalysisChart from './chart/SentimentAnalysisChart';
import SentimentChart from './chart/SentimentChart';
import WhaleTokenDistribution from './chart/WhaleTokenDistribution';

const Analysis = () => {
  return (
    <Fragment>
      <div className='analysis-graph'>
        <div className="analysis-graph-one">
          <div className="upper">
            <div>
              <h4>3.8M</h4>
              <p>Number of Gov token Holder</p>
            </div>
            <div className="per-anyslsis">
              <p>+25.9k</p>
              <hr />
              <p>20%</p>
            </div>
          </div>
          
          <hr />
          <br />
          
          <div className="lower">
            <p>200k</p> <br />
            <p>number of last</p> <br />
            <p>vote participant</p>
          </div>
        </div>
        <WhaleTokenDistribution />
        <SentimentChart />
      </div>
    </Fragment>
  )
}

export default Analysis;