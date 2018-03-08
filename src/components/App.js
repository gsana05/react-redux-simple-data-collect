import React, { Component } from 'react';
import UserList from '../containers/user-list'; 
import UserDetail from '../containers/user-detail';
//import { createStore } from 'redux';




class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Username</h2>
        <UserList />
        <hr />
        <h2>User Detail</h2> 
        <UserDetail /> 
      </div>
    );
  }
}

export default App;
