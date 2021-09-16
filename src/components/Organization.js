import React from 'react'

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>Organization</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/slider.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Pemberkatan Nikah</h6>
            <p>
              Perbekatan Nikah dimulai pada pukul 10.00 WIB di Gereja GPdI Maranatha Medan
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Resepsi Penikahan</h6>
            <p>
              Resepsi Pernikahan dimulai pada pukul 12.00 WIB di Wisma Sriwijawa GKPI
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Acara Resepsi</h6>
            <p>
              Makan Bersama, Sesi Foto dengan Pengantik dan Karoke dilaksanakan di lantai 2.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Upacara Adat</h6>
            <p>
              Upacara Adat dilaksanakan pada pukul 13.00 WIB seletelah makan siang di lantai 1.              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
