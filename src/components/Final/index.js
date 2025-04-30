import {Component} from 'react'

import './index.css'

class Final extends Component {
  render() {
    return (
      <div className="final-cont">
        <div className='main-cont-5'>
           <div className='big-img-cont'>
              <img alt="image" className='big-img' src="https://www.uolo.com/images/award-hori.png"/>
           </div>
           <div className='Uolo-cont'>
               <h1>Uolo in media</h1>
           </div>
           <div className='imgs-cont'>
               <img alt="image" className='comp-img' src="https://www.uolo.com/images/tech_crunch.svg"/>
               <img alt="image" className='comp-img' src="https://www.uolo.com/images/Logo_Inc%2042.svg"/>
               <img alt="image" className='comp-img' src="https://www.uolo.com/images/entrackr.svg"/>
               <img alt="image" className='comp-img' src="https://www.uolo.com/images/Logo_ET.svg" />
               <img alt="image" className='comp-img' src="https://www.uolo.com/images/Logo_Financial_express.svg"/>
           </div>
        </div>
        <div className="banner-cont">
          <h1>Interested to know more?</h1>
          <h1>Get in touch with us</h1>
          <button type="button" className="demo-btn">
            Request demo
          </button>
        </div>
        <div className="items-cont">
          <div className="apps">
            <img
              className="app-img"
              src="https://www.uolo.com/images/google-play-store-badge.png"
                alt="image"
            />
            <img
              className="app-img"
              src="https://www.uolo.com/images/apple-app-store-badge.png"
                alt="image"
            />
          </div>
          <div className="col">
            <h1 className="h-1">PRODUCTS</h1>
            <h1 className="s-1">Learning Programs</h1>
            <h1 className="s-1">School Platform</h1>
          </div>
          <div className="col">
            <h1 className="h-1">COMPANY</h1>
            <h1 className="s-1">Contact Us</h1>
            <h1 className="s-1">Partner With Us</h1>
          </div>
          <div>
            <h1 className="s-1">Privacy Policy</h1>
            <h1 className="s-1">Terms of Service</h1>
          </div>
        </div>
        <div className="sub">
          <h1 className="sub-1">
            All rights reserved with Uolo EdTech Private Limited
          </h1>
        </div>
      </div>
    )
  }
}

export default Final
