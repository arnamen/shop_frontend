import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-ro';
import publicIp from 'public-ip';

import Header from '../components/Header/Header';
import MainPage from '../containers/MainPage/MainPage';
import Footer from '../components/Footer/Footer';
import { authCheckState, authSetIp } from '../store/actions/auth';

import AboutUsPage from './AboutUs';
import ContactsPage from './Contacts';
import DeliveryPage from './Delivery';
import FeedbackPage from './Feedback';
import OfferPage from './Offer';
import PaymentPage from './Payment';
import ContentPage from './ContentPage';
import ComparePage from './Compare';
import FavouritesPage from './Favourites';
import CartPage from './cart';
import ItemPage from './ItemPage/[itemid]';
import ClientAccount from './ClientAccount';
import Admin from './Admin';
import { updateContent } from '../store/actions/items';

function App({Component, pageProps}) {

  useEffect(() => {

    publicIp.v4().then(ip => props.onSetIp(ip));
    props.onUpdateContent();
    props.onAutoAuth();
    
  }, []);

  return (
    <React.Fragment>
      <Header />
        <Component {...pageProps} />
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
