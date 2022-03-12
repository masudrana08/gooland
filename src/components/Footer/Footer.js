import React from 'react'
import FooterLogo from '../../assets/img/footer-logo.png'
export default function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div className="footer footerBg" >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
              <div className="footer-box">
                <div className="logo"><img src={FooterLogo} alt="" /></div>
                <p className="text">Safe, secure, & innovative crypto currency borrow &
                  lending solutions.</p>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.3s"
                  data-wow-delay="0.3s">
                  <div className="footer-box">
                    <h4 className="lasthead">Company</h4>
                    <ul className="footer-link">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.4s"
                  data-wow-delay="0.3s">
                  <div className="footer-box">
                    <h4 className="lasthead">Support</h4>
                    <ul className="footer-link">
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Knowledge Base</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s"
                  data-wow-delay="0.3s">
                  <div className="footer-box">
                    <h4 className="lasthead">Policy</h4>
                    <ul className="footer-link">
                      <li><a href="#">Terms of use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Refund Policy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.6s"
                  data-wow-delay="0.3s">
                  <div className="footer-box">
                    <h4 className="lasthead">Contacts</h4>
                    <ul className="footer-link">
                      <li> support@gooland </li>
                      <li> +372 624 6211 </li>
                      <li> +372 624 600 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="row">
            <div className="col-12 text-center">
              <div className="footer-bottom">
                <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                  <p className="text">Copyright &copy; 2021. All Rights Reserved By <a href="#">Gooland</a></p>
                </div>
                <div className="social-style wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.3s">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  )
}
