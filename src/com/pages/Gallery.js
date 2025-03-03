import React, { useEffect } from 'react'
import Footer from './Footer'

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Gallery</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className='gallery_row'>
            <div className='gallery_col'>
              <img src="./img/gallery1.jpeg" alt="" />
              <img src="./img/gallery2.jpeg" alt="" />
              <img src="./img/gallery3.jpeg" alt="" />
              <img src="./img/gallery4.jpeg" alt="" />
              <img src="./img/gallery15.png" alt="" />

            </div>
            <div className='gallery_col'>
              <img src="./img/gallery7.jpg" alt="" />
              <img src="./img/gallery8.png" alt="" />
              <img src="./img/gallery9.png" alt="" />
              <img src="./img/gallery10.png" alt="" />
              <img src="./img/gallery11.png" alt="" />
              <img src="./img/gallery12.png" alt="" />
              <img src="./img/gallery6.jpg" alt="" />
            </div>
            <div className='gallery_col gallery_col_last'>
              <div className='gallery_col_last1'>
              <img src="./img/gallery13.png" alt="" />
              <img src="./img/gallery14.png" alt="" />
              <img src="./img/gallery5.jpg" alt="" />
              </div>
              <div className='gallery_col_last1'>
                <img src="./img/gallery16.png" alt="" />
                <img src="./img/gallery17.png" alt="" />
                <img src="./img/gallery18.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Gallery
