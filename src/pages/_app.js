import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import publicIp from 'public-ip';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { authCheckState, authSetIp } from '../store/actions/auth';

import { updateContent } from '../store/actions/items';
import store from '../store';

import './index.css';
import 'pure-react-carousel/dist/react-carousel.cjs.css';
import 'react-calendar/dist/Calendar.css';
function App({ Component, pageProps }) {

  const router = useRouter();
  const dispatch = useDispatch();
  
    useEffect(() => {
        publicIp.v4().then(ip => authSetIp(ip));
        dispatch(updateContent());
        dispatch(authCheckState());
    }, [])


/*   useEffect(() => {

    publicIp.v4().then(ip => props.onSetIp(ip));
    props.onUpdateContent();
    props.onAutoAuth();

  }, []); */
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    </Provider>
  );
}

//REDUX 
const makeStore = ()=>store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(App);
//