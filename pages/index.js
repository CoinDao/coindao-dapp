import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Analysis from "../components/analysis";
import Daolist from "../components/daolist";
import Header from "../components/header";
import Jumbotron from "../components/jumbotron";
import ReactSlider from "../components/ReactSlider";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    const response = axios.get("");
    setData(response?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={""}>
      <Head>
        <title>CoinDAO</title>
        <meta
          name="description"
          content="This is a dao analysis app, it helps tp show the analysis of DAO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main__bk__one"></div>
        <div className="main__bk__two"></div>
        <div className="main__bk__three"></div>
        <div className="main__bk__four"></div>

        <div className="container">
          <ReactSlider />
          <Header />
          <Jumbotron />
          

          <div className="">
            <h3 className="search-address">
              Search for any details with
            </h3>
            <div className="form-container">
                
              <input type={'text'} placeholder="Enter Blockchain account" />
              <button>
                <strong>ETH</strong>
              </button>
            </div>
          </div>
          <Analysis />
          <Daolist />
        </div>
      </main>
    </div>
  );
}
