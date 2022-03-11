import React from 'react'
import FaqImg from "../../assets/img/faq.png"
import Fdot1 from "../../assets/img/fdot-1.png"
import Fdot2 from "../../assets/img/fdot-2.png"
import Fdot3 from "../../assets/img/fdot-3.png"
import FaqIcon from "../../assets/img/faq-icon.png"

export default function Faq() {
  return (
    <div>
    <div className="faq" id="faq">
        <img src={Fdot1} alt="" className="fdot-1" />
        <img src={Fdot2} alt="" className="fdot-2" />
        <img src={Fdot3} alt="" className="fdot-3" />
        <div className="coin"> <img src={FaqIcon} alt="" /> </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                    <div className="section-head">
                        <h4 className="lasthead">How crypto bank transfers work</h4>
                        <h2 className="title">It's Really Easy!</h2>
                        <p className="text">
                            It's easier than you think.Follow 3 simple easy steps
                        </p>
                        <a href="#" className="button button-1">Ask a question</a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-8">
                    <div className="faq-box">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <img src={FaqIcon} alt="" className="icon" />
                                        Which banks can I transfer to?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam
                                        temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus
                                        doloribus? Ratione, molestiae magnam.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <img src={FaqIcon} alt="" className="icon" />
                                        How soon will the transferred funds be available?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam
                                        temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus
                                        doloribus? Ratione, molestiae magnam.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <img src={FaqIcon} alt="" className="icon" />
                                        Any fees to make a crypto transfer to a bank account?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam
                                        temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus
                                        doloribus? Ratione, molestiae magnam.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        <img src={FaqIcon} alt="" className="icon" />
                                        How much money I can send in one transaction?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam
                                        temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus
                                        doloribus? Ratione, molestiae magnam.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        <img src={FaqIcon} alt="" className="icon" />
                                        Can I claim a refund?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam
                                        temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus
                                        doloribus? Ratione, molestiae magnam.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                    <div className="fpic">
                        <img src={FaqImg} alt="" className="faq-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
