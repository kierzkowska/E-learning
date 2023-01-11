import React from 'react'

import {Footer, Blog, Join, Features, WhoAreWe, Header} from './containers';
import {Call, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhoAreWe/>
        <Features/>
        <Join/>
        <Call/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App