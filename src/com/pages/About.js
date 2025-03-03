import React, { useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TiStarburst } from "react-icons/ti";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

import Footer from './Footer';
import Trending_Courses from './Trending_Courses';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const options = {
  //   items: 3,
  //   loop: true,
  //   margin: 20,
  //   autoplay: true,
  //   slideTransition: "linear",
  //   autoplayTimeout: 2000,
  //   // autoplaySpeed: 3000,
  //   autoplayHoverPause: false,
  //   // animateOut:'slideOutUp',
  //   nav: false,
  //   dots: false,
  //   margin: 0,
  //   responsive: {
  //     1100: {
  //       items: 3,
  //     },
  //     724: {
  //       items: 2,
  //     },
  //     500: {
  //       items: 1,
  //     },
  //     370: {
  //       items: 1,
  //       // innerWidth: "100%",
  //       // outerWidth: "100%",
  //     },
  //     220: {
  //       items: 1,
  //     }
  //   },
  // };
  return (
    <>
      <section>
        <div className='home_area home_page_img course_page_img'>

          <div className='about_home'>
            <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">About Us</h1>


          </div>
        </div>



        <section className='about_section'>
          <div className="container">
            <div className="about_row">
              <div className="about_img" data-aos="fade-right"
                data-aos-duration="3000">

                <img src="./img/about.png" alt="" className='img-about' />
              </div>
              <div className="about_details" data-aos="fade-left"
                data-aos-duration="3000">
                <h2>About DG multimedia Institute</h2>
                <p>DGmultimedia is a premier institute based in Surat, offering specialized courses in digital marketing and IT training to propel your career forward.</p>
                <p>Founded by industry experts with a passion for nurturing talent and shaping successful futures.</p>
                <p>Founded with a vision to bridge the gap between industry demands and skill development, DGMultimedia has been a trailblazer in offering cutting-edge courses that prepare individuals for successful careers in the digital realm.</p>
                <p>DGMultimedia has proudly served a diverse range of clients including aspiring digital marketers, web developers, and tech enthusiasts who have excelled in their fields with our expert guidance and training.</p>
                {/* <button className='button'>Read More</button> */}
              </div>
            </div>
          </div>
        </section>

        <div className='container'>

          <div className='about_choose'>
            <h1 className='about_choose_head' data-aos="fade-up"
              data-aos-duration="3000">Why Choose DGMultimedia?</h1>

          </div>
          <div className='card_detail'>
            <div className='about_card_cont' data-aos="fade-up"
              data-aos-duration="3000">
              <h2 className='number'>01</h2>
              <h3 className='about_head'>Expert Faculty</h3>
              <p>Our experienced instructors bring industry insights and hands-on experience to provide top-notch training.</p>
            </div>

            <div className='about_card_cont' data-aos="fade-up"
              data-aos-duration="3000">
              <h2 className='number'>02</h2>
              <h3 className='about_head'>Career-Focused Training</h3>
              <p>We prioritize building practical skills to ensure our students are job-ready in the fast-paced tech industry.</p>
            </div>

            <div className='about_card_cont' data-aos="fade-up"
              data-aos-duration="3000">
              <h2 className='number'>03</h2>
              <h3 className='about_head'>Comprehensive Course Offerings</h3>
              <p>From digital marketing to full stack development, we offer a wide range of courses to cater to diverse career aspirations.</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='title' data-aos="fade-up"
            data-aos-duration="3000">
            <h1>Core Values</h1>
          </div>

          <div className="timeline" data-aos="fade-up"
            data-aos-duration="3000">
            <div className="chechpoint">

              <div className='right_box' >
                <div>
                  <span><FaHome /></span>
                </div>
                <div>
                  <h2>Excellence</h2>
                  <p>Striving for excelence in all aspects of education, training, research, and service.,</p>
                </div>
              </div>
            </div>

            <div className="chechpoint">
              <div className='left_box' >
                <div>
                  <h2>Innovation</h2>
                  <p>Fostering a culture of innovation, creativity, and forward-thinking in the field of technology.</p>
                </div>

                <div>
                  <span><IoGiftSharp /></span>
                </div>
              </div>
            </div>

            <div className="chechpoint">
              <div className='right_box' >
                <div>
                  <span><FaUser /></span>
                </div>
                <div>
                  <h2>Integrity</h2>
                  <p>Upholding high ethical standards, honesty, and transparency in all interactions and activities.</p>
                </div>
              </div>
            </div>

            <div className="chechpoint">
              <div className='left_box' >
                <div>
                  <h2>Lifelong Learning</h2>
                  <p>Encouraging a commitement to continuous learning, adaptability, and staying updated with emerging technologies.</p>
                </div>
                <div>
                  <span><FaRunning /></span>
                </div>
              </div>
            </div>

            <div className="chechpoint">
              <div className='right_box'>
                <div>
                  <span><IoMdSettings /></span>
                </div>
                <div>
                  <h2>Student-Centric Approach</h2>
                  <p>Placing students at the centre of all activities, providing a supportive and inclusive learning environment, and prioritizing their success.</p>
                </div>
              </div>
            </div>

            <div className="chechpoint">
              <div className='left_box' >
                <div>
                  <h2>Industry Relevance</h2>
                  <p>Ensuring that the institute's programs and curriculum align with industry needs, trends, and best practices.</p>
                </div>
                <div>
                  <span><TiStarburst /></span>
                </div>
              </div>
            </div>

            <div className="chechpoint">
              <div className='right_box' >
                <div>
                  <span><HiMiniBuildingLibrary /></span>
                </div>
                <div>
                  <h2>Diversity and Inclusion</h2>
                  <p>Embracing and respecting diversity in all its forms and fostering an inclusive environment that values and celebrates differences.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <div>
        <div>
          <h1>Meet Our Dedicated Team</h1>
        </div>
      </div> */}
      </section>
      {/* <section className='student_reviews_section'>
        <div className='container'>
          <div className='student_reviews_title'>
            <h2>Our Courses</h2>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <div className="course_carosual">
                <img src="./img/scroll1.jpeg" alt="" />


              </div>
            </div>
            <div class="item">
              <div className="course_carosual">
                <img src="./img/scroll2.jpeg" alt="" />
              </div>
            </div>
            <div class="item">
              <div className="course_carosual">
                <img src="./img/scroll3.jpeg" alt="" />
              </div>
            </div>
            <div class="item">
              <div className="course_carosual">
                <img src="./img/scroll4.jpeg" alt="" />
              </div>
            </div>
            <div class="item">
              <div className="course_carosual">
                <img src="./img/scroll5.jpeg" alt="" />
              </div>
            </div>
            <div class="item">
              <div className="course_carosual">
                <img src="./img/scroll6.jpeg" alt="" />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section> */}


      <section className='courses_icon'>
        <div className='container'>
          <div className="offer_title course_module_title" data-aos="fade-up"
            data-aos-duration="3000">
            <h2> Certification</h2>

          </div>
          <ul className='certificate'>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/Skill_India.png" alt="" /></li>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/nsdc.png" alt="" /></li>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/iso.png" alt="" /></li>

          </ul>

        </div>
      </section>
      <Trending_Courses />
      <Footer />
    </>
  )
}

export default About