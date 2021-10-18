import React from 'react'
import invitationImage from '../assets/images/Undangan.jpeg'
function Invitation () {
  return (
    <div id='invitation' className='section-padding'>
      <div className='container'>
        <div className='row'>
   
          <div
            className='col-md-12 mb-30 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title headerBrown'>Wedding Invitation</h3>
          </div>
   
          <div className='col-md-12'>
              <div className='img text-center'>
                {' '}
                <img src={invitationImage} className='img-fluid widthauto' alt='' />{' '}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invitation
