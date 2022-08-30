import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import NavbarIndex from './components/navbar/index';
import HomeIndex from './components/home/index';
import ReviewsRouter from './components/reviews/router';
import AboutIndex from './components/about/index';
import FAQIndex from './components/faq/index';
import ContactUsIndex from './components/contact_us/index';
import TermsAndConditionsIndex from './components/terms_and_conditions/index';
import PrivacyPolicyIndex from './components/privacy_policy/index';
import FooterIndex from './components/footer/index';
import BlogRouter from './components/blog/router';
import './App.css';

function App() {

  const httpsEnabled = window.location.protocol === "https:"
   
  if(!httpsEnabled && window.location.hostname !== "localhost"){
      // Simulate an HTTP redirect:
      window.location.replace("https://" + window.location.hostname + window.location.search);
  }
  return (
    <Router>
      <NavbarIndex />
      <Switch>
        <Route exact path="/">
          <HomeIndex />
        </Route>
        <Route path="/reviews">
          <ReviewsRouter />
        </Route>
        <Route exact path="/about">
          <AboutIndex />
        </Route>
        <Route exact path="/faq">
          <FAQIndex />
        </Route>
        <Route exact path="/contact-us">
          <ContactUsIndex />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndConditionsIndex />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicyIndex />
        </Route>
        <Route path="/blog">
          <BlogRouter />
        </Route>
        <Route path="/*">
          <Redirect to={"/" + window.location.search} />
        </Route>
      </Switch>
      <FooterIndex />
    </Router>
  );
}

export default App;
