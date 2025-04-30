import {Component} from 'react'

import './index.css'

class Management extends Component{
    render(){
        return(
            <div className='main-body-1'>
                <div className='main-cont-2'>
                    <div className='head-cont-1'>
                        <p className='head-cont-head'>School Management Software</p>
                        <p className='head-cont-conxt'>View More</p>
                    </div>

                    <div className='items-cont'>
                        <div className='item-1'>
                            <img alt="image" src="https://www.uolo.com/images/fees-icon.svg"/>
                            <h1 className='item-head'>Fees</h1>
                            <h2 className='item-conxt'>Ensure better cash flow management & reporting</h2>
                        </div>
         
                        <div className='item-1'>
                            <img alt="image" src="https://www.uolo.com/images/attendence-icon.svg"/>
                            <h1 className='item-head'>Attendence </h1>
                            <h2 className='item-conxt'>Help reuduce teacher's non academic efforts</h2>
                        </div>

                        <div className='item-1'>
                            <img alt="image" src="https://www.uolo.com/images/chat-home.svg"/>
                            <h1 className='item-head'>Communication</h1>
                            <h2 className='item-conxt'>Connect securely with all stake holders</h2>
                        </div>

                        <div className='item-1'>
                            <img alt="image" src="https://www.uolo.com/images/report-card.svg"/>
                            <h1 className='item-head'>Report Card</h1>
                            <h2 className='item-conxt'>Keeps parents updated on child's progress</h2>
                        </div>
                    </div>
                </div>

                <div className='main-cont-3'>
                    <div className='img-star-cont'>
                        <img alt="image" className='img-star' src="https://www.uolo.com/images/speak-star.svg"/>
                    </div>
                    <div className='combo'>
                        <img alt="image" className='img-brace' src="https://www.uolo.com/images/left-branket.svg"/>
                        <p className='para-cont'>
                            <span>Largest edtech company</span>of India & South-East <br/>Asia, partnering with private schools to drive<br/>
                            <span>impactful learning programs.</span><br/><img className="spring" src="https://www.uolo.com/images/speak-bottom-graphic.svg"/>
                        </p>
                        <img alt="image" className='img-brace' src="https://www.uolo.com/images/right-bracket.svg"/>
                    </div>
                </div>

                <div className='main-cont-4'>
                    <div className='cont-1'>
                        <h1 className='main-head-4'>5.5 Mn+<br/><span className='sub-head-4'>Students</span></h1>
                        
                    </div>
                    <div className='cont-1'>
                        <h1 className='main-head-4'>15,000 +<br/><span className='sub-head-4'>Schools</span></h1>
                        
                    </div>
                </div>
            </div> 
        )
    }
}

export default Management
