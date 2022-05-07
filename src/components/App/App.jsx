import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Understanding />
      <Support />
      <Comments />
    </div>
  );
}

export default App;
