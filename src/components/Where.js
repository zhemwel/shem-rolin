import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> <strong>GPdI Maranatha</strong>,
                  Jl. S. Parman No.63, Petisah Hulu, Kec. Medan Baru, Kota Medan
              </p>
              <p>
                <i className='ti-time'></i> <span>10:00am – 11:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
                <i className='ti-location-pin'></i> <strong>Wisma GKPI Sriwijaya</strong>,
                Jl. Sriwijaya No.65-C, Petisah Hulu, Kec. Medan Baru, Kota Medan 
              </p>
              <p>
                <i className='ti-time'></i> <span>12:00pm - End</span>
              </p>
            </div>
          </div>
          {/* <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Accomodations</h5>
              <p>
                <i className='ti-direction-alt'></i> Hotel and distance from
                wedding party restaurant:
              </p>
              <p>
                <i className='ti-direction'></i> The William Vale (7 min)
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Where
