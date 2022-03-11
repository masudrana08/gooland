import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import How from './components/How/How';
import Exchange from './components/Exchange/Exchange';
import Transfer from './components/Transfer/Transfer';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

import './assets/css/normalize.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome-5.10.2.min.css'
import './assets/css/plugin/magnific-popup.css'
import './assets/css/plugin/nice-select.css'
import './assets/css/plugin/animate.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div>
        {/* <!-- ==========Preloader========== --> */}
        {/* <div class="preloader">
            <div class="preloader-inner">
                <div class="preloader-icon">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div> */}
      {/* <!-- ==========Preloader========== --> */}
      <Navbar />
      <Header />
      <How />
      <Exchange />
      <Transfer />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
