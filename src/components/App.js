import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../estilo/style.css';
import Menu from './Menu';
import Header from './Header';
import Body from "./Body";
import $ from 'jquery';

class App extends Component {
  render() {
    return (
    <div className="container">
      <Header/>
      <Menu/>
      <Body/>  
    </div>
    );
}
}
export default App 