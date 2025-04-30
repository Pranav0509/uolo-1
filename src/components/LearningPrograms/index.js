import {Component} from 'react'

import './index.css'

class LearningPrograms extends Component {
  render() {
    
    return (
      <div className="learn-cont">
        <div className="l-main-head">
          <h1>Uolo revolutionises the school system with learning programs</h1>
        </div>

        <div className="main-cont">
          <div className="sub-cont-1">
            <h1 className="title">Essential Knowledge Pack</h1>
            <h1 className="context"> 
              All core subjects in one easy-to-access pack.
            </h1>
            <div className="l-img-cont">
              <img
                className="book-img"
                src="https://www.uolo.com/images/home-essential-main.png"
              />
            </div>
          </div>

          <div className="sub-cont-2">
            <div className="sub-cont-21">
              <img
                className="sub-cont-2-img"
                src="https://www.uolo.com/images/home-dawn-main.png"
              />
              <div>
                <h1 className="sub-2-title">Dawn</h1>
                <h1 className="sub-2-context">The start of a bright journey</h1>
              </div>
            </div>
            <div className="sub-cont-21">
              <img
                className="sub-cont-2-img"
                src="https://www.uolo.com/images/home-speak-main.png"
              />
              <div>
                <h1 className="sub-2-title">Speak</h1>
                <h1 className="sub-2-context">
                  Engage the world with fluent spoken English
                </h1>
              </div>
            </div>
            <div className="sub-cont-21">
              <img
                className="sub-cont-2-img"
                src="https://www.uolo.com/images/home-tekie-main.png"
              />
              <div>
                <h1 className="sub-2-title">Tekei</h1>
                <h1 className="sub-2-context">Computer science decoded</h1>
              </div>
            </div>
          </div>
        </div>




    <div className='second-cont'>
        <div className='head-cont'>
            <h1 className='sec-main-text'>Learning Products</h1>
            <a className='sec-sub-text'>View More</a>
        </div>
        <div className='body-cont-1'>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-ignite.png"/>
                <h2 className='img-text'>IGNITE</h2>
                <h2 className='img-conxt'>English</h2>
                <p className='img-para'>(Grade 1-5)</p>
            </div>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-computer.png"/>
                <h2 className='img-text'>HEXA</h2>
                <h2 className='img-conxt'>Computer Science</h2>
                <p className='img-para'>(Grade 1-8)</p>
            </div>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-social-science.png"/>
                <h2 className='img-text'>QUEST</h2>
                <h2 className='img-conxt'>Social Studies</h2>
                <p className='img-para'>(Grade 3-5)</p>
            </div>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-aware.png"/>
                <h2 className='img-text'>AWARE</h2>
                <h2 className='img-conxt'>GK & Current Affairs</h2>
                <p className='img-para'>(Grade 1-8)</p>
            </div>
        </div>

        <div className='body-cont-1'>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-math.png"/>
                <h2 className='img-text'>IMAGINE</h2>
                <h2 className='img-conxt'>Mathematics</h2>
                <p className='img-para'>(Grade 1-8)</p>
            </div>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-math2.png"/>
                <h2 className='img-text'>PERFECT</h2>
                <h2 className='img-conxt'>Maths Workbook </h2>
                <p className='img-para'>(Grade 6-8)</p>
            </div>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-science.png"/>
                <h2 className='img-text'>REFLECTION</h2>
                <h2 className='img-conxt'>Science</h2>
                <p className='img-para'>(Grade 3-5)</p>
            </div>
            <div className='data-cont'>
                <img className='lp-img' src="https://www.uolo.com/images/our-sub-env-sc.png"/>
                <h2 className='img-text'>DISCOVER</h2>
                <h2 className='img-conxt'>EVS</h2>
                <p className='img-para'>(Grade 1-5)</p>
            </div>
        </div>
    </div>

    



      </div>
    )
  }
}

export default LearningPrograms
