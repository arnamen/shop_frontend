import React from 'react';
import { connect } from 'react-redux';
import {loginTest} from './store/actions/login';
function App(props) {
  console.log(props.login)
  return (
    <div className="App">
      <button style={{width: "50px", height: "50px"}} onClick={() => props.onLogin()}></button>
      {'' + props.login}
    </div>
  );
}

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
