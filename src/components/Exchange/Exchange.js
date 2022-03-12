import React from 'react'
import Rdot1 from "../../assets/img/rdot-1.png"
import Rdot2 from "../../assets/img/rdot-3.png"
import BtcImg from "../../assets/img/btc.png"
import MyChart from '../Custom/MyChart'

export default function Exchange() {
  return (
    <div>
       {/* <!-- Rates Start --> */}
    <div className="rates ratesBg" >
        <img src={Rdot1} alt="" className="rdot-1" />
        <img src={Rdot2} alt="" className="rdot-3" />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                    <div className="section-head">
                        <h4 className="lasthead">Cash out your crypto to</h4>
                        <h2 className="title">Global Exchange Rates</h2>
                        <p className="text">
                            Our goal is to simplify investing so that anyone can be an investor.Withthis in mind,
                            we hand-pick the investments we offer on our platform.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-12">
                    <div className="main-chart">
                        <div className="chart-box">

                            <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div className="item">
                                    <h3 className="subtitle">Current Rates</h3>
                                    <a href="#" className="link">See live Rates</a>
                                </div>
                                <div className="item">
                                    <form id="#" method="post" action="#">
                                        <div className="form-group">
                                            <div className="selector">
                                                <div className="coin">
                                                    <img src={BtcImg} alt="" />
                                                    <div className="language-select">
                                                        <select className="select-bar">
                                                            <option value="">BTC</option>
                                                            <option value="">USD</option>
                                                            <option value="">BTC</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="item">
                                    <h3 className="subtitle">€9357.79</h3>
                                    <a href="#" className="link">Bitcoin (BTC)</a>
                                </div>
                            </div>
                            <div className="contentbox-2 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div className="item-box">
                                    <h3 className="subtitle">€ 9266.92 | </h3>
                                    <a href="#" className="link">Yesterday</a>
                                </div>
                                <div className="item-box">
                                    <h3 className="subtitle two">€ 8932.61 | </h3>
                                    <a href="#" className="link">Last Week</a>
                                </div>
                                <div className="item-box">
                                    <h3 className="subtitle">€ 10013.90 | </h3>
                                    <a href="#" className="link">Last Month</a>
                                </div>
                            </div>
                            {/* <div className="chart wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div id="chart">
                                    <div id="timeline-chart"></div>
                                </div>
                            </div> */}
                            <MyChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
