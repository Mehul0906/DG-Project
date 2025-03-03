import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./CoursesSlider.css"; // CSS file import
function Trending_Courses() {
  // const options = {
  //   items: 1,
  //   loop: true,
  //   margin: 20,
  //   autoplay: true,
  //   slideTransition: "linear",
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 3000,
  //   autoplayHoverPause: false,
  //   animateOut:'slideOutUp',
  //   nav: true,
  //   dots: false,
  //   margin: 0,
  //   responsive: {
  //     1100: {
  //       items: 4,
  //     },
  //     724: {
  //       items: 3,
  //     },
  //     500: {
  //       items: 2,
  //     },
  //     370: {
  //       items: 1,
  //       innerWidth: "100%",
  //       outerWidth: "100%",
  //     },
  //     220: {
  //       items: 1,
  //     }
  //   },
  // };
  const swiperRef = useRef(null);
  return (
    <>
      {/* <section className="team_section" data-aos="fade-up"
        data-aos-duration="3000">
        <div className="container">
          <div className='student_reviews_title'>
            <h2>Trending Courses</h2>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course1.png" alt="" />


                  <h5>Web Design</h5>
                  <Link to="/fronted">  <button className='tre_button'>View More</button></Link>


                </div>


              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course2.png" alt="" />


                  <h5>Web Development</h5>
                  <Link to="/full_stack">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course3.png" alt="" />


                  <h5>Flutter</h5>

                  <Link to="/flutter">  <button className='tre_button'>View More</button></Link>
                </div>

              </div>
            </div>

            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course5.jpg" alt="" />


                  <h5>Digital Marketing</h5>
                  <Link to="/digital">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course6.png" alt="" />


                  <h5>Graphic Design</h5>
                  <Link to="/graphics">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course7.jpeg" alt="" />


                  <h5>Ui-Ux Design</h5>
                  <Link to="/ui_ux">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course8.jpeg" alt="" />


                  <h5>Artificial Intelligence</h5>
                  <Link to="/artificial_intelligence">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course9.png" alt="" />


                  <h5>Advance Digital Marketing</h5>
                  <Link to="/advance_digital">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/course10.png" alt="" />


                  <h5>Social Media Influencer</h5>
                  <Link to="/social_media">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>

            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/cyber_security1.jpg" alt="" />


                  <h5>Cyber Security</h5>
                  <Link to="/cyber">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/2d_animation1.png" alt="" />


                  <h5>2D Animation</h5>
                  <Link to="/2d_animation">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>


            <div class="item">
              <div className="stu_details tre_details">
                <div className='tre_title'>
                  <img src="./img/3d_animation1.png" alt="" />


                  <h5>3D Animation</h5>
                  <Link to="/3d_animation">  <button className='tre_button'>View More</button></Link>

                </div>

              </div>
            </div>
          </OwlCarousel>
        </div>
      </section> */}
      <section>
      <div className="slider-container" data-aos="fade-up"
              data-aos-duration="3000">
      <div className='student_reviews_title'>
            <h2>Trending Courses</h2>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} 
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="card">
            <img src="./img/course1.png" alt="Development" />
            <div className="card-content">
              <h3>Design Courses</h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <Link to="/graphics">  <button className='btn'>Know More..!</button></Link>
              
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card">
            <img src="./img/course2.png" alt="Design" />
            <div className="card-content">
              <h3>Development Courses </h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <Link to="/full_stack">  <button className='btn'>Know More..!</button></Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card">
            <img src="./img/Treading-Course-C.webp" alt="Programming" />
            <div className="card-content">
              <h3>Programming IT</h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <Link to="/flutter">  <button className='btn'>Know More..!</button></Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card">
            <img src="./img/Trending-Course-Digital Marketing.webp" alt="Marketing" />
            <div className="card-content">
              <h3>Marketing Courses</h3>
              <div className="stars">⭐⭐⭐⭐</div>
              <Link to="/advance_digital">  <button className='btn'>Know More..!</button></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
    </>
  )
}

export default Trending_Courses
