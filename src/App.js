import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Content from './components/content/content'
import Footer from './components/footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faPrint, faDownload, faDesktop, faKeyboard, faPen, faUniversity, faTools, faToolbox, faMicrophone } from '@fortawesome/free-solid-svg-icons';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faKey, faPrint, faDownload, faDesktop, faKeyboard, faPen, faUniversity, faTools, faToolbox, faMicrophone);

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header/>     
        </div>
        <Content/>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
