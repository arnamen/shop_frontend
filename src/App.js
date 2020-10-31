import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import {loginTest} from './store/actions/login';
import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
import Footer from './components/Footer/Footer';

import AboutUsPage from './components/InformationPages/AboutUs/AboutUs';
import ContactsPage from './components/InformationPages/Contacts/Contacts';
import DeliveryPage from './components/InformationPages/Delivery/Delivery';
import FeedbackPage from './components/InformationPages/Feedback/Feedback';
import OfferPage from './components/InformationPages/Offer/Offer';
import PaymentPage from './components/InformationPages/Payment/Payment';
//COMPONENT
function App(props) {
  
  return (
    <React.Fragment>
      <Header/>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/page/about-us' component={AboutUsPage}/>
      <Route exact path='/page/delivery' component={DeliveryPage}/>
      <Route exact path='/page/contacts' component={ContactsPage}/>
      <Route exact path='/page/feedback' component={FeedbackPage}/>
      <Route exact path='/page/offer' component={OfferPage}/>
      <Route exact path='/page/payment' component={PaymentPage}/>
      <Footer/>
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
