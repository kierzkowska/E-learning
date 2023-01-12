import React from 'react'
import './brand.css'
import {google, dropbox, shopify} from './import';

const Brand = () => {
  return (
    <div className='learn3__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand