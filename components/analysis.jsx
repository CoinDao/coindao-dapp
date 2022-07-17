import React, { Fragment } from 'react'
import SentimentAnalysisChart from './chart/SentimentAnalysisChart';
import SentimentChart from './chart/SentimentChart';
import WhaleTokenDistribution from './chart/WhaleTokenDistribution';

const Analysis = () => {
  return (
    <Fragment>
      <div className='analysis-graph'>
        <div>
          <div className="upper">
            <div>
              <h4>3.8M</h4>
              <p>Lorem ispum dolor sit amet</p>
            </div>
            <div>
              <p>+25.9k</p>
              <hr />
              <p>20%</p>
            </div>
          </div>
          <hr />

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