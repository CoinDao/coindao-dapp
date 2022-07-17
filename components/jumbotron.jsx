import React, { Fragment } from 'react'
import SentimentAnalysisChart from './chart/SentimentAnalysisChart'
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

const Jumbotron = () => {

  return (
    <Fragment>
        
        <div className="jumbotron-container">
            <div className="left">
                
                <h2>This is Coin DAO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio harum eveniet. Quae earum quidem recusandae repudiandae magnam fugiat voluptates qui, obcaecati doloremque ex ea distinctio perferendis et! Minima, quae.</p>
                <div className="social-icon">
                    <a href="">
                        <BsFacebook color='#242424' />
                    </a>
                    <a href="">
                        <AiFillTwitterCircle color='#242424' />
                    </a>
                    <a href="">
                        <FaDiscord color='#242424' />
                    </a>
                </div>
            </div>
            <div className="right">
                <SentimentAnalysisChart />

            </div>
        
        </div>


        
    </Fragment>
  )
}

export default Jumbotron