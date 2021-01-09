import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import {} from './store/actions/login';

import AboutUsPage from './components/InformationPages/AboutUs/AboutUs';
import ContactsPage from './components/InformationPages/Contacts/Contacts';
import DeliveryPage from './components/InformationPages/Delivery/Delivery';
import FeedbackPage from './components/InformationPages/Feedback/Feedback';
import OfferPage from './components/InformationPages/Offer/Offer';
import PaymentPage from './components/InformationPages/Payment/Payment';
import ContentPage from './containers/ContentPage/ContentPage';
import ComparePage from './components/Compare/Compare';
import FavouritesPage from './components/Favourites/Favourites';
import CartPage from './components/Cart/Cart';
import ItemPage from './containers/ItemPage/ItemPage';
import ClientAccount from './components/ClientAccount/ClientAccount';

function App(props) {

  return (
    <React.Fragment>
      <Header />
      {props.login &&
        <Switch>
          <Route path='/account' component={ClientAccount} />
        </Switch>}
      <Route exact path='/' component={MainPage} />
      <Route exact path='/page/about-us' component={AboutUsPage} />
      <Route exact path='/page/delivery' component={DeliveryPage} />
      <Route exact path='/page/contacts' component={ContactsPage} />
      <Route exact path='/page/feedback' component={FeedbackPage} />
      <Route exact path='/page/offer' component={OfferPage} />
      <Route exact path='/page/payment' component={PaymentPage} />
      <Route exact path='/page/collection' component={ContentPage} />
      <Route exact path='/page/compares' component={ComparePage} />
      <Route exact path='/page/favourites' component={FavouritesPage} />
      <Route exact path='/page/cart' component={CartPage} />
      <Route exact path='/item/:itemid' component={ItemPage} />

      <Footer />
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
    onAuthLogin: () => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
