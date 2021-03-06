import React from 'react'
import storyImage from '../assets/images/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our Love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
              Pertama kali aku (Shemwel) ketemu di sebuah tempat makan dearah Gaperta Medan pada tanggal 9 Mei 2020,
              lalu setelah itu kami mulai intens berkomunikasi dan bertemu. Kami berkenalan atau istilahnya PDKT sampai 2 bulan.
            </p>
            <p>
              Ketika aku merasa bahwa dia (Rolin) cocok untukku, aku memberanikan diri untuk menembak dia jadi pacarku pada tanggal 10 Juli 2020 di Danau Toba.
            </p>
            <p>
              Selama pacaran ada masa suka maupun duka, tetapi kami selalu melewati semua masalah yang kami hadapi dengan kepala dingin,
              untungnya kami mempunyai hobi yang sama yaitu traveling, jadi kami selalu jalan-jalan untuk meninggalkan penat dan jenuh di kota Medan dan mengirup udara segar menuju daerah pegunungan.
              Dan ketika kami merasa sudah waktunya untuk melanjutkan hubungan kami ke jenjang yang lebih serius dan kami juga mendapat restu dari orang tua kami,
              kami akhir sepakat untuk menikah.
            </p>
            <h4>29 Oktober 2021, Itulah tanggal yang kami pilih..</h4>
            <p>
              Semoga cerita cinta kami akan abadi sampai selamanya.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
