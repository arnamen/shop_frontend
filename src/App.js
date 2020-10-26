import React from 'react';
import { connect } from 'react-redux';

import {loginTest} from './store/actions/login';
import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
//COMPONENT
function App(props) {
  
  return (
    <React.Fragment>
      <Header/>
      <MainPage/>
    </React.Fragment>
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
