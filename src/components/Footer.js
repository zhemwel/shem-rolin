import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span className='headerBrown'>
                  Shemwel <small>&</small> Rolin
                </span>
              </a>
            </h2>
            <p className='copyright'>October 29, 2021 – Jl. Sriwijaya No.65-C, Medan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
