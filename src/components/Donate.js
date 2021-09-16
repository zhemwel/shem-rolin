import React from 'react'
import mandiri from '../assets/images/logo_mandiri.png'
import bca from '../assets/images/logo_bca.png'
import bni from '../assets/images/logo_bni.png'
function Story () {
  return (
    <div id='donate' className='story section-padding'>
      <div className='container'>
        <div className='row mb-40'>
          <h3 className='oliven-story-title text-center marginBottom2rem'>Donate</h3>
          <div className='col-md-4 text-center'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img marginBottom1rem'>
                {' '}
                <img src={mandiri} alt='' className='width128px'/>{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>           
                    <div>
                      Atas Nama : <strong>Shemwel Dennis Tambunan</strong>
                    </div>
                    <div>
                      Nomor Rekening : <strong>1300012927599</strong>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img marginBottom1rem'>
                {' '}
                <img src={bca} alt='' className='width128px'/>{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                    <div>
                      Atas Nama : <strong>Shemwel Dennis Tambunan</strong>
                    </div>
                    <div>
                      Nomor Rekening : <strong>0222877332</strong>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img marginBottom1rem'>
                {' '}
                <img src={bni} alt='' className='width128px'/>{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                    <div>
                      Atas Nama : <strong>Rolinca Sianturi</strong>
                    </div>
                    <div>
                      Nomor Rekening : <strong>990151621</strong>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Story
