import React from 'react'
import TransferImg from  "../../assets/img/transfer.png"
import TransferImg1 from "../../assets/img/transfer-1.png"
import TransferImg2 from "../../assets/img/transfer-2.png"
import TransferImg3 from "../../assets/img/transfer-3.png"

export default function Transfer() {
  return (
    <div>
       {/* <!-- Effortless Start --> */}
    <div className="effortless"  id="features"> 
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-6">
                    <div className="section-head wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <h4 className="lasthead">Why choose Gooland</h4>
                        <h2 className="title">Effortless Crypto
                            Transfer to Bank</h2>
                        <p className="text">
                            The simple way to grow your money like the world’s most
                            sophisticated investors.
                        </p>
                    </div>

                    <ul className="list">
                        <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="thumb"><img src={TransferImg1} alt="" /></div>
                            <p className="text">Trusted</p>
                        </li>
                        <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="thumb"><img src={TransferImg2} alt="" /></div>
                            <p className="text">Competitive</p>
                        </li>
                        <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="thumb"><img src={TransferImg3} alt="" /></div>
                            <p className="text">Secure</p>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                    <div className="pic">
                        <img src={TransferImg} alt="" className="transfer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
