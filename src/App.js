import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar'
import HomeImage from './components/HomeImage'
import HomeContent from './components/HomeContent'
import Footer from './components/Footer'
import BuyerPage from './components/BuyerPage'
import SellerPage from './components/SellerPage';
import ReviewPage from './components/ReviewPage';

class App extends Component {
  state = {
    page: "home"
  }

  handleClick = (e) => {
    let button = e.target.id
    let newState = {...this.state, page: button}
    this.setState(newState)
  }

  renderPage = () => {
    if(this.state.page === "home"){
      return (
        <>
        <HomeImage />
        <HomeContent />
        </>
      )
    }else if(this.state.page === "buyer"){
      return (
        <BuyerPage />
      )
    }else if(this.state.page === "seller"){
      return (
        <SellerPage />
      )
    }else if(this.state.page === "review"){
      return (
        <ReviewPage />
      )
    }
  }

  render() {
    return (
      <div className="App">
      <Navbar handleClick={this.handleClick}/>
      {this.renderPage()}
      <Footer />
      </div>
    );
  }

}

export default App;
