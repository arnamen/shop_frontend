import React from 'react';
import { connect } from 'react-redux';

import {loginTest} from './store/actions/login';
import Header from './components/Header/Header';
//COMPONENT
function App(props) {
  return (
    <Header/>
  );
}

//REDUX 
const mapStateToProps = (state) => {
  return {
    login: state.login.login
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch(loginTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
