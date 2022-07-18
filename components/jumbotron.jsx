import React, { Fragment } from 'react'
import SentimentAnalysisChart from './chart/SentimentAnalysisChart'
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { PieChart } from './nchart.js/pie'

const Jumbotron = () => {

  return (
    <Fragment>
        
        <div className="jumbotron-container">
            <div className="left">
                
                <h2>CoinDAO Provides Quality Analytics on DAO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio harum eveniet. Quae earum quidem recusandae repudiandae.</p>
                <div className="social-icon">
                    <a href="">
                        <BsFacebook className='search-icon-banner' color='#242424' />
                    </a>
                    <a href="">
                        <AiFillTwitterCircle className='search-icon-banner' color='#242424' />
                    </a>
                    <a href="">
                        <FaDiscord className='search-icon-banner' color='#242424' />
                    </a>
                </div>
            </div>
            <div className="right">
                <PieChart />
            </div>
        
        </div>


        
    </Fragment>
  )
}

export default Jumbotron