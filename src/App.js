import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteConfigExample from './component/reactRouter';

class App extends Component {
  render() {
    return (
      <div>
      <RouteConfigExample />
      {/* <AuthExample /> */}
      </div>
    );
  }
}

export default App;
