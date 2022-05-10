import './App.css';
import * as React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollTop';
import Team from './components/Team';
import Bottom from './components/Bottom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/bootstrap.min.css';
import './assets/css/google-icon.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Landing/>
        {/* <Routes> */}
          {/* <Route path="/" element={<Landing/>}/> */}
            {/* <Top/>
            <About/>
            <Gota/>
            <Tokenomics/>
            <Roadmap/>
            <Twitterfeed/>
          </Route> */}
          {/* <Route path="/team" element={<Team/>} exact/> */}
            {/* <Team/> */}
          {/* </Route> */}
        {/* </Routes> */}
        <Bottom/>
        <Footer/>
        <ScrollToTopBtn />
      </Router>
      <script src="./assets/js/bootstrap.bundle.min.js" type="text/javascript" />
    </div>
  );
}

export default App;
