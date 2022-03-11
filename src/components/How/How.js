import React from 'react'
import EasyBg from '../../assets/img/easy-bg.png'
import ArrowImg from '../../assets/img/arrow.png'
import Easy1 from "../../assets/img/easy-1.png"
import Easy2 from "../../assets/img/easy-2.png"
import Easy3 from "../../assets/img/easy-3.png"
import DashboardImg from "../../assets/img/dashboad.png"

export default function How() {
  return (
    <div>
       {/* <!-- Easy Start --> */}
    <div className="easy" id="howitworks">
        <div className="bg-img">
            <img src={EasyBg} alt="" className="easy-bggg" />
        </div>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-8">
                    <div className="section-head wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <h4 className="lasthead">How crypto bank transfers work</h4>
                        <h2 className="title">It's Really Easy!</h2>
                        <p className="text">
                            It's easier than you think.Follow 3 simple easy steps
                        </p>
                    </div>
                    <div className="item-box">
                        <div className="item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <img src={ArrowImg} alt="" className="arrow" />
                            <div className="icon">
                                <img src={Easy1} alt="" />
                            </div>
                            <h5 className="title">Choose Your bank account</h5>
                        </div>
                        <div className="item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <img src="./assets/img/arrow.png" alt="" className="arrow" />
                            <div className="icon">
                                <img src={Easy2} alt="" />
                            </div>
                            <h5 className="title">Select your cryptocurrency</h5>
                        </div>
                        <div className="item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="icon">
                                <img src={Easy3} alt="" />
                            </div>
                            <h5 className="title">Receive money to your bank account
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 d-none d-xl-block">
                    <div className="pic">
                        <img src={DashboardImg} alt="" className="dashboad" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
