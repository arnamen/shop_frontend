import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import publicIp from 'public-ip';
import {useRouter} from 'next/router';

import Header from '../components/Header/Header';
import MainPage from './MainPage/MainPage';
import Footer from '../components/Footer/Footer';
import { authCheckState, authSetIp } from '../store/actions/auth';

import { updateContent } from '../store/actions/items';
import './index.css';
import 'pure-react-carousel/dist/react-carousel.cjs.css';

function App({Component, pageProps}) {

  const router = useRouter();

  useEffect(() => {

    publicIp.v4().then(ip => props.onSetIp(ip));
    props.onUpdateContent();
    props.onAutoAuth();
    
  }, []);
  return (
    <React.Fragment>
      <Header />
        {router.asPath === '/' 
        ? <MainPage/>
      : <Component {...pageProps} />}
      <Footer />
    </React.Fragment>
  );
}

//REDUX 
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    ip: state.auth.ip,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoAuth: () => dispatch(authCheckState()),
    onSetIp: (ip) => dispatch(authSetIp(ip)),
    onUpdateContent: () => dispatch(updateContent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
