import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';
import Review from '../Review/Review';
import StartFeedback from '../StartFeedback/StartFeedback';
import ThankYou from '../ThankYou/ThankYou';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/'>
          <Header />
          <StartFeedback />
        </Route>
        <Route exact path='/feeling'>
          <Header />
          <Feeling />
        </Route>
        <Route exact path='/understanding'>
          <Header />
          <Understanding />
        </Route>
        <Route exact path='/support'>
          <Header />
          <Support />
        </Route>
        <Route exact path='/comments'>
          <Header />
          <Comments />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
        <Route exact path='/thank-you'>
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}

export default App;
