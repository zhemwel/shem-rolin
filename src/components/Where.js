import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
// import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>Tempat & Waktu Pernikahan</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5 className='marginBottom2remImportant'>Pemberkatan Nikah</h5>
              <p>
                <i className='ti-location-pin'></i> <strong>GPdI Maranatha</strong>,
                  Jl. S. Parman No.63, Petisah Hulu, Kota Medan
              </p>
              <p>
                <i className='ti-time'></i> <span>10:00am – 11:00pm</span>
              </p>
              <p>
                Detail Tempat Lewat Goolge Map - <strong className='colorBlue'><a href='https://goo.gl/maps/5tpZp3Fv2s4Gv7U79' target="_blank" rel="noreferrer">[Klik Disini]</a></strong>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5 className='marginBottom2remImportant'>Resepsi Pernikahan</h5>
              <p>
                <i className='ti-location-pin'></i> <strong>Wisma GKPI Sriwijaya</strong>,
                Jl. Sriwijaya No.65-C, Petisah Hulu, Kota Medan 
              </p>
              <p>
                <i className='ti-time'></i> <span>12:00pm - End</span>
              </p>
              <p>
                Detail Tempat Lewat Goolge Map - <strong className='colorBlue'><a href='https://goo.gl/maps/iUjrw8Q5F2V3kKs48' target="_blank" rel="noreferrer">[Klik Disini]</a></strong>
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
