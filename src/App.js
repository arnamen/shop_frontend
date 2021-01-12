import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import publicIp from 'public-ip';

import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { authCheckState, authSetIp } from './store/actions/auth';

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
import Admin from './containers/Admin/Admin';

function App(props) {

  useEffect(() => {

    publicIp.v4().then(ip => {
      console.log(ip);
      props.onSetIp(ip)
    });
    props.onAutoAuth();
    
  }, [props]);

  return (
    <React.Fragment>
      <Header />

      {props.auth &&
        <Switch>
          <Route path='/account' component={ClientAccount} />
        </Switch>}
      <Switch>
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

      {props.ip === '94.45.100.38' 
          ? <Route path='/admin' component={Admin}/>
          : <MainPage/>}
        
      <Route path='/' component={MainPage} />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

//REDUX 
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    ip: state.auth.ip
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoAuth: () => dispatch(authCheckState()),
    onSetIp: (ip) => dispatch(authSetIp(ip))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
