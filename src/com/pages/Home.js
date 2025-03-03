import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { FaUsers } from "react-icons/fa";
import { PiDesktopTowerBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GiPencilBrush } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Trending_Courses from "./Trending_Courses";
import { Link } from "react-router-dom";
import Company_partner from "./Company_partner";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";  
import "magnific-popup";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const options = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: false,
    dots: true,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      },
    },
  };

  const options1 = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: true,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  useEffect(() => {
    $(".popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }, []);
  const images = [
    "./img/user1.jpeg",
    "./img/user2.jpeg",
    "./img/user3.jpeg",
    "./img/user4.jpeg"
  ];
  return (
    <>
      {/* Slider */}
      <section className="herosection">
        <div
          className="container-fluid w-100 p-0 h-100"
          style={{ marginTop: "135px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ width: "100%", height: "100vh" }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./img/GIMS-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Full Stack Developer-Banner-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Graphic Design-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Video Editing Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item active">
                <img
                  src="./img/Advanced Digital Marketing Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/* <div className='herosection_row' style={{position:"absolute", top:"10px",zIndex:"1"}}>
                        <div className='herosection_details' data-aos="fade-right"
                            data-aos-duration="3000">
                            <h1>Empower Your Future with DG Multimedia</h1>
                            <p>Unlock your potential with our cutting-edge digital marketing and IT courses in Surat. Let your career soar with expert guidance.

                            </p>
                            <Link to="courses"><button className='button'>Explore Now</button></Link>
                        </div>
                        <div className='herosection_img' data-aos="fade-left"
                            data-aos-duration="3000">
                            <img src="./img/home3.png" alt="" />
                        </div>
          </div> */}
        </div>
      </section>

      {/* Courses */}
      <section className="services_section">
        <div classN ame="container">
          <div
            className="services_title offer_title"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2>Our Courses For Your Bright Future</h2>
          </div>
          <div className="services_card">
            <div className="services_card_details" id="services_card_Main" data-aos="fade-up" data-aos-duration="3000">
              <Link to="advance_digital">
                <div className="services_img">
                  <img src="./img/web-design.png" alt="Img Not Suppotted" />
                </div>
                <div className="card_details">
                  <h5>Web Design</h5>
                  {/* <p>Boost your online presence with our comprehensive digital marketing strategies.</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="artificial_intelligence">
                <div className="services_img2">
                  <img
                    src="./img/graphic-design.png"
                    alt=""
                    className="img_graphic-design"
                  />
                </div>
                <div className="card_details">
                  <h5>Graphics Design</h5>
                  {/* <p>Artificial intelligence is the science of making machines that can think like humans</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="graphics">
                <div className="services_img3">
                  <img
                    src="./img/web-development.png"
                    alt=""
                    className="img_web-development"
                  />
                </div>
                <div className="card_details">
                  <h5>Web Development</h5>
                  {/* <p>Build a Creative Brands with Creative Designs</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="full_stack">
                <div className="services_img4">
                  <img
                    src="./img/App-Development.png"
                    alt=""
                    className="img_App-Development"
                  />
                </div>
                <div className="card_details">
                  <h5>App Development</h5>
                  {/* <p>Become a proficient full stack developer by mastering front-end and back-end development.</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="social_media">
                <div className="services_img5">
                  <img
                    src="./img/cyber-security.png"
                    alt=""
                    
                  />
                </div>
                <div className="card_details">
                  <h5>Cyber Security</h5>
                  {/* <p>A Social Media Influencer is a user on social media who has established credibility in a specific industry.</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="flutter">
                <div className="services_img6">
                  <img
                    src="./img/Ui-Ux design.png"
                    alt=""
                    
                  />
                </div>
                <div className="card_details">
                  <h5>Ui-Ux Design</h5>
                  {/* <p>Master the art of developing interactive mobile applications using Flutter technology.</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              id="Web-design"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="advance_digital">
                <div className="services_img7">
                  <img
                    src="./img/Digital-Marketing.png"
                    alt=""
                   
                  />
                </div>
                <div className="card_details">
                  <h5>Advance Digital Marketing</h5>
                  {/* <p>Boost your online presence with our comprehensive digital marketing strategies.</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="social_media">
                <div className="services_img8">
                  <img src="./img/Game-Design.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>Game Design</h5>
                  {/* <p>A Social Media Influencer is a user on social media who has established credibility in a specific industry.</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="artificial_intelligence">
                <div className="services_img9">
                  <img
                    src="./img/video-editing.png"
                    alt=""
                    style={{ marginTop: "5px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>Video Editing</h5>
                  {/* <p>Artificial intelligence is the science of making machines that can think like humans</p> */}
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="graphics">
                <div className="services_img10">
                  <img
                    src="./img/3d-movie.png"
                    alt=""
                    style={{ marginTop: "10px"}}
                  />
                </div>
                <div className="card_details">
                  <h5>3D Animation</h5>
                  {/* <p>Build a Creative Brands with Creative Designs</p> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="team_section mt-5">
        <div className="container">
          <div className="about_row">
            <div
              className="about_img"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img src="./img/About-Us-aptop.jpeg" alt="" className="img-about" />
            </div>
            <div
              className="about_details"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <h2>About DG multimedia Institute</h2>
              <p>
                Welcome to DG Multimedia Education Institute, where we empower
                students with comprehensive, skill-based training tailored for
                the dynamic digital era. We stand at the crossroads of
                creativity and technology, offering an environment where passion
                meets practical expertise. Our institute is dedicated to
                transforming raw talent into refined proficiency by bridging the
                gap between theoretical knowledge and real-world application.
              </p>
              <p>
                Our mission is to equip learners with essential competencies,
                critical thinking abilities, and an innovative
                mindset—attributes that are vital to navigating and excelling in
                the rapidly evolving digital landscape. By emphasizing hands-on
                learning, industry insights, and collaborative exploration, we
                prepare our students to not only meet but exceed the demands of
                today’s competitive world. At DG Multimedia, every student is
                encouraged to embrace challenges, continuously grow, and become
                a confident, future-ready professional
              </p>
              <p>
                Join us on a transformative journey where you unlock your true
                potential, nurture a spirit of lifelong learning, and shape your
                future with resilience and creativity. Let your passion be the
                spark, and our expert guidance be the fuel to ignite your
                success in the digital realm.
              </p>
              <Link to="about">
                {" "}
                <button className="button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
       {/* <section className='team_section'>
                <div className="container">
                    <div className='services_title offer_title' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h2>Meet Our Dedicated Team</h2>

                    </div>
                    <div className='services_card team_card' >
                        <div className='services_card_details team_card_details' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className='team_img'>
                                <img src="./img/2.png" alt="" />
                                <div class="overlay">
                                    <div class="text">Keval vaniya [CEO]</div>
                                    <p>CEO</p>
                                </div>
                            </div>

                        </div>
                        <div className='services_card_details team_card_details' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className='team_img'>
                                <img src="./img/1.png" alt="" />
                                <div class="overlay">
                                    <div class="text">Umang kathiriya</div>
                                </div>
                            </div>

                        </div>
                        <div className='services_card_details team_card_details' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className='team_img'>
                                <img src="./img/3.png" alt="" />
                                <div class="overlay">
                                    <div class="text">Kuldeep savaliya
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='services_card_details team_card_details' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className='team_img'>
                                <img src="./img/5.png" alt="" />
                                <div class="overlay">
                                    <div class="text">Dhrmesh katariya</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
       </section>  */}

      {/* 2 Side Images section */}
      <section className="team_section mt-5">
        <div className="container">
          {/* <div className="about_row">
                        <div className="about_img parent_reviews">

                            <img src="./img/team.jpeg" alt="" className='team_img' />


                            <OwlCarousel className="owl-theme" {...options1}>
                                <div class="item">
                                    <img src="./img/team.jpeg" alt="" className='team_img' />
                                </div>
                                <div class="item">
                                    <img src="./img/stu1 (1).jpg" alt="" className='team_img' />
                                </div>
                                <div class="item">
                                    <img src="./img/stu1 (2).jpg" alt="" className='team_img' />
                                </div>
                                <div class="item">
                                    <img src="./img/stu1 (3).jpg" alt="" className='team_img' />
                                </div>

                            </OwlCarousel>
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Trust of <span>100% Students</span> and Parents</h2>
                            <p>At DG Multimedia, we are dedicated to providing cutting-edge IT and multimedia technology education rooted in thorough research. Our approach ensures that students and parents alike trust in our commitment to excellence. Here are some key benefits of studying at DG Multimedia...</p>
                            <div className='team_row_details'>
                                <ul className='team_col_details'>
                                    <li><FaLongArrowAltRight />100% field Oriented Training.</li>
                                    <li><FaLongArrowAltRight />International Curriculum</li>
                                    <li><FaLongArrowAltRight />Scholarship Initiative</li>
                                    <li><FaLongArrowAltRight />Promoting a Growth Mindset</li>
                                    <li><FaLongArrowAltRight />Industry Exposure</li>

                                </ul>
                                <ul className='team_col_details'>
                                    <li><FaLongArrowAltRight />Multiple Training Center</li>
                                    <li><FaLongArrowAltRight />International Collaborations</li>
                                    <li><FaLongArrowAltRight />Vibrant Campus Life</li>
                                    <li><FaLongArrowAltRight />Celebrating Diversity</li>
                                </ul>
                            </div>
                        </div>
          </div> */}
          <div
            className="training-container"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            {/* Entrepreneurship Training Section */}
            <div className="training-section bg-light">
              <div className="training-text">
                <h2>
                  ENTREPRENEURSHIP <span className="highlight">TRAINING</span>
                </h2>
                <hr className="divider" />
                <ul>
                  <li>👉 Field-Oriented Training</li>
                  <li>👉 Industry-Relevant Skills</li>
                  <li>👉 Project-Based Training</li>
                  <li>👉 Expert Training & Sessions</li>
                  <li>👉 Global Career Opportunities</li>
                  <li>👉 Real-World Experience</li>
                  <li>👉 Industry-Relevant Skills</li>
                  <li>👉 Mastery Certification</li>
                </ul>
              </div>
              <div className="training-image">
                <img
                  src="./img/ENTREPRENEURSHIP TRAINING.webp"
                  alt="Entrepreneurship Training"
                  className="rounded shadow"
                  style={{ height: "300px", width: "450px" }}
                />
              </div>
            </div>

            {/* Our Education Methodology Section */}
            <div className="training-section bg-light">
              <div className="training-image">
                <img
                  src="./img/EDUCATION METHODOLOGY.webp"
                  alt="Education Methodology"
                  className="rounded shadow"
                  style={{ height: "300px", width: "450px" }}
                />
              </div>
              <div className="training-text">
                <h2>
                  OUR EDUCATION <span className="highlight">METHODOLOGY</span>
                </h2>
                <hr className="divider" />
                <ul>
                  <li>👉 Flexible Learning</li>
                  <li>👉 Personality Development Training</li>
                  <li>👉 Expert Session</li>
                  <li>👉 100% practical Education</li>
                  <li>👉 Educational Activities</li>
                  <li>👉 Freelancing Platform Training</li>
                  <li>👉 Promoting a Growth Mindset</li>
                  <li>👉 100% practical education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending_Courses */}
      <Trending_Courses />

      {/* Offer section */}
      <section className="offer_section mt-5">
        <div className="container">
          <div className="offer_row">
            <div
              className="offer_title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>What We Offer</h2>
            </div>
            <div className="offer_card_details">
              <div
                className="offer_card_col"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="offer_card">
                  <GiPencilBrush />
                  <h6>Soft Skill Traning By Experts</h6>
                </div>
                <div className="offer_card">
                  <FaHandsHoldingChild />
                  <h6>Placement Assistance</h6>
                </div>
                <div className="offer_card">
                  <FaUsers />
                  <h6>Traning In Team Enviroment</h6>
                </div>

                <div className="offer_card">
                  <FaHandsHoldingChild /> <h6>Industry Oriented Syllabus</h6>
                </div>
                <div className="offer_card">
                  <FaUsers />
                  <h6>Personality Development Training</h6>
                </div>
              </div>
              <div
                className="offer_card_col"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <img src="./img/What-We-Offer-Vector.png" alt="" style={{ width: "80%",height:"650px",marginLeft:"50px"}} />
              </div>
              <div
                className="offer_card_col"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="offer_card">
                  <FaListCheck /> <h6>Day-To-Day Progress Tracking</h6>
                </div>
                <div className="offer_card">
                  <GiTeacher /> <h6>Experienced Faculties From IT Company</h6>
                </div>
                <div className="offer_card">
                  <PiDesktopTowerBold />
                  <h6> Traching Methodology as It Industry</h6>
                </div>
                <div className="offer_card">
                  <PiDesktopTowerBold />
                  <h6>Ai & Human Based Assessment System</h6>
                </div>
                <div className="offer_card">
                  <PiDesktopTowerBold />
                  <h6>Freelancing Platforms Training</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* infrastructure-section */}
  <section class="container Stunning-Section" data-aos="fade-left"
            data-aos-duration="3000">
      <div className='student_reviews_title'>
            <h2>Our Stunning Infrastructure</h2>
      </div>
         <div class="row">
             <div class="col-lg-4 col-md-12 mb-4"data-aos="fade-left"
            data-aos-duration="3000">
                 <div class="Stunning-Card">
                     <img src="./img/MD-Office-Area.jpg" alt="Machine Learning with Python"/>
                     <img class="img2 mt-4" src="./img/Lab-Area.webp" alt=""/>
                 </div>
             </div>
             <div class="col-lg-4 col-md-6 mb-4"data-aos="fade-left"
            data-aos-duration="3000">
                 <div class="Stunning-Card">
                     <img src="./img/Confrence-Area.jpg" alt="Angular"/>
                     <img class="img4 mt-4" src="./img/Office-Area.jpg" alt="Node JS"/>
                 </div>
             </div>
             <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-left"
            data-aos-duration="3000">
                 <div class="Stunning-Card">
                     <img src="./img/Thery-Area.jpg" alt="React JS"/>
                     <img class="mt-4" src="./img/out-door are.jpg" alt="Flutter"/>
                 </div>
             </div>
         </div>
  </section>



      {/* Reviews student */}
      <section
        className="student_reviews_section mt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="student_reviews_title">
            <h2>Student Reviews</h2>
          </div>
          {/* <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user1.jpeg" alt="" />

                  <div>
                    <h5>harshita brikeshkumar nonia</h5>
                    <span>Advance digital marketing</span>
                  </div>
                </div>

                <p>
                  "DG Multimedia excels in digital marketing courses!
                  Comprehensive content, expert instructors, and practical
                  skills. Highly recommended for career advancement!"
                </p>
              </div>
            </div>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user2.jpeg" alt="" />

                  <div>
                    <h5>Abhishek madhulal choudhary</h5>
                    <span>Advance digital marketing</span>
                  </div>
                </div>
                <p>
                  "DG Multimedia offers top-notch digital marketing courses!
                  Comprehensive, expert-led training with practical insights.
                  Highly recommend for career growth!"
                </p>
              </div>
            </div>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user3.jpeg" alt="" />

                  <div>
                    <h5>kokani harshita sumitbhai</h5>
                    <span>Graphics design</span>
                  </div>
                </div>
                <p>
                  "The graphic design course at DG Multimedia was a
                  transformative experience for me. It covered everything from
                  fundamental design principles to advanced techniques in
                  digital media."
                </p>
              </div>
            </div>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user4.jpeg" alt="" />

                  <div>
                    <h5>aaina bhagawanaram saraswat</h5>
                    <span>Graphics design</span>
                  </div>
                </div>
                <p>
                  " The graphic design course at DG Multimedia offered a
                  practical approach to learning. It covered essential design
                  principles, software skills, and creative techniques that are
                  essential for a career in graphic design."
                </p>
              </div>
            </div>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user5.jpeg" alt="" />

                  <div>
                    <h5> Tamnna Rajkumar Prajapati</h5>
                    <span>Graphics design</span>
                  </div>
                </div>
                <p>
                  "The graphic design course at DG Multimedia was comprehensive,
                  covering both traditional and digital aspects of design. It
                  started with the basics and gradually introduced more advanced
                  techniques, which was perfect for beginners like me."
                </p>
              </div>
            </div>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user6.jpeg" alt="" />

                  <div>
                    <h5> Karan Rajeshkumar Prajapati </h5>
                    <span>Graphics design</span>
                  </div>
                </div>
                <p>
                  "The graphic design course at DG multimedia was a
                  comprehensive introduction to the principles and practices of
                  graphic design. It covered a wide range of topics from
                  typography and layout design to digital imaging and branding."
                </p>
              </div>
            </div>
            <div class="item">
              <div className="stu_details">
                <div className="stu_title">
                  <img src="./img/user7.jpeg" alt="" />

                  <div>
                    <h5>Sabhad Pratik bharatbhai</h5>
                    <span>CCC</span>
                  </div>
                </div>
                <p>
                  "The CCC language course at DG Multimedia was an excellent
                  introduction to computer concepts. It covered fundamental
                  concepts comprehensively and provided hands-on experience with
                  coding exercises."
                </p>
              </div>
            </div>
          </OwlCarousel> */}

          {/* <div class="container my-5">
            <div
              id="testimonialCarousel"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
           
                <div class="carousel-item active">
                  <div class="testimonial-box text-center">
                    <img
                      src="./img/user1.jpeg"
                      class="rounded-circle mb-3"
                      alt="User"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <h5 class="testimonial-name">
                      harshita brikeshkumar nonia
                    </h5>
                    <p>
                      {" "}
                      ⭐⭐⭐⭐⭐ Excellent Learning Experience at DG Multimedia
                      Education Institute!
                    </p>
                    <p class="testimonial-role">Advance digital marketing</p>
                    <p class="testimonial-text">
                      "I had an amazing experience at DG Multimedia Education
                      Institute while pursuing the Digital Advanced Marketing
                      course. The institute provides a well-structured
                      curriculum, covering everything from SEO, social media
                      marketing, PPC, and content marketing to advanced digital
                      strategies. The faculty is highly experienced, supportive,
                      and always ready to help students with practical
                      insights."
                    </p>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="testimonial-box text-center">
                    <img
                      src="./img/user2.jpeg"
                      class="rounded-circle mb-3"
                      alt="User"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <h5 class="testimonial-name">
                      Abhishek madhulal choudhary
                    </h5>
                    <p>
                      {" "}
                      ⭐⭐⭐⭐⭐ Excellent Learning Experience at DG Multimedia
                      Education Institute!
                    </p>
                    <p class="testimonial-role">Advance digital marketing</p>
                    <p class="testimonial-text">
                      "Enrolling in the Digital Advanced Marketing course at DG
                      Multimedia Education Institute was one of the best
                      decisions for my career. The institute provides a perfect
                      blend of theory and practical learning, ensuring students
                      understand real-world digital marketing strategies."
                    </p>
                  </div>
                </div>

              
                <div class="carousel-item">
                  <div class="testimonial-box text-center">
                    <img
                      src="./img/user3.jpeg"
                      class="rounded-circle mb-3"
                      alt="User"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <h5 class="testimonial-name">kokani harshita sumitbhai</h5>
                    <p>⭐⭐⭐⭐⭐ Excellent Learning Experience!</p>
                    <p class="testimonial-role">Graphics design</p>
                    <p class="testimonial-text">
                      "I had an amazing experience at DG Multimedia Education
                      Institute while pursuing my Graphics Design course. The
                      faculty is highly skilled and provides in-depth knowledge
                      of design principles, software, and industry trends. The
                      hands-on training and real-world projects helped me build
                      strong design skills. The supportive learning environment
                      and modern infrastructure made my journey even better. I
                      highly recommend this institute to anyone looking to excel
                      in the field of graphic design!"
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-box text-center">
                    <img
                      src="./img/user4.jpeg"
                      class="rounded-circle mb-3"
                      alt="User"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <h5 class="testimonial-name">
                      Aaina Bhagawanaram Saraswat
                    </h5>
                    <p>
                      {" "}
                      ⭐⭐⭐⭐⭐ Excellent Learning Experience at DG Multimedia
                      Education Institute!
                    </p>
                    <p class="testimonial-role">Graphics design</p>
                    <p class="testimonial-text">
                      {" "}
                      "The graphic design course at DG multimedia was a
                      comprehensive introduction to the principles and practices
                      of graphic design. It covered a wide range of topics from
                      typography and layout design to digital imaging and
                      branding."
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-box text-center">
                    <img
                      src="./img/user5.jpeg"
                      class="rounded-circle mb-3"
                      alt="User"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <h5 class="testimonial-name">
                      Karan Rajeshkumar Prajapati
                    </h5>
                    <p>
                      {" "}
                      ⭐⭐⭐⭐⭐ Excellent Learning Experience at DG Multimedia
                      Education Institute!
                    </p>
                    <p class="testimonial-role">Graphics design</p>
                    <p class="testimonial-text">
                      {" "}
                      "The graphic design course at DG Multimedia was a
                      transformative experience for me. It covered everything
                      from fundamental design principles to advanced techniques
                      in digital media."
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-box text-center">
                    <img
                      src="./img/user6.jpeg"
                      class="rounded-circle mb-3"
                      alt="User"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <h5 class="testimonial-name">Sabhad Pratik bharatbhai</h5>
                    <p>
                      {" "}
                      ⭐⭐⭐⭐⭐ Excellent Learning Experience at DG Multimedia
                      Education Institute!
                    </p>
                    <p class="testimonial-role">CCC</p>
                    <p class="testimonial-text">
                      {" "}
                      "The CCC language course at DG Multimedia was an excellent
                      introduction to computer concepts. It covered fundamental
                      concepts comprehensively and provided hands-on experience
                      with coding exercises."
                    </p>
                  </div>
                </div>
              </div>

             
              <button
                class="carousel-control-prev"
                id="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  id="carousel-control-prev-icon"
                ></span>
              </button>
              <button
                class="carousel-control-next"
                id="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  id="carousel-control-next-icon"
                ></span>
              </button>
            </div>
          </div>*/}

{/* <div className="slider-container" style={{ width: "50%", margin: "auto" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper" style={{ textAlign: "center" }}>
              <img
                src={img}
                alt={`slide-${index}`}
                style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
</div> */}
  
  {/* <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="testimonial-card">Testimonial 1</div>
            </div>
            <div class="carousel-item">
                <div class="testimonial-card">Testimonial 2</div>
            </div>
            <div class="carousel-item">
                <div class="testimonial-card">Testimonial 3</div>
            </div>
            <div class="carousel-item">
                <div class="testimonial-card">Testimonial 4</div>
            </div>
            <div class="carousel-item">
                <div class="testimonial-card">Testimonial 5</div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
  </div> */}
    
  


    <section class="testimonial-section">
        <div class="testimonial-container">
            <div class="testimonial-header">
                <h4>TESTIMONIALS</h4>
                <h2>Our Students Feedback</h2>
                <img src="./img/Student Line.png" alt=""/>.
                <p>"Here are some of our students' stories that explain <br></br> their experiences and expanded potential after <br></br> learning from the DG Multimedia Education."</p>
            </div>
            <div class="testimonial-slider-wrapper">
                <div class="testimonial-slider">
                    <div class="testimonial-card">
                        <img src="./img/user1.jpeg" alt="User"/>
                        <h5>harshita brikeshkumar nonia</h5>
                        <span>Advance Gigital Marketing</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>"DG Multimedia excels in digital marketing courses!
                  Comprehensive content, expert instructors, and practical
                  skills. Highly recommended for career advancement!"</p>
                     
                        
                    </div>
                    <div class="testimonial-card">
                        <img src="./img/user5.jpeg" alt="User"/>
                        <h5>Tamnna Rajkumar Prajapati</h5>
                        <span>Graphics design</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>  "The graphic design course at DG Multimedia was comprehensive,
                  covering both traditional and digital aspects of design. It
                  started with the basics and gradually introduced more advanced
                  techniques, which was perfect for beginners like me."</p>
                        
                    </div>
                    <div class="testimonial-card">
                        <img src="./img/user7.jpeg" alt="User"/>
                        <h5>Sabhad Pratik bharatbhai</h5>
                        <span>CCC</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>"The CCC language course at DG Multimedia was an excellent
                  introduction to computer concepts. It covered fundamental
                  concepts comprehensively and provided hands-on experience with
                  coding exercises."</p>
                        
                    </div>
                    <div class="testimonial-card">
                        <img src="./img/user2.jpeg" alt="User"/>
                        <h5>Abhishek madhulal choudhary</h5>
                        <span>Advance Gigital Marketing</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>  "DG Multimedia offers top-notch digital marketing courses!
                  Comprehensive, expert-led training with practical insights.
                  Highly recommend for career growth!"</p>
                        
                    </div>
                    
                </div>
                <button class="prev1" onclick="prevSlide()">❮</button>
                <button class="next1" onclick="nextSlide()">❯</button>
            </div>
        </div>
    </section>
        </div>
      </section>
    
      <Footer />
    </>
  );
}
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;

  function showSlide() {
    let slides = document.querySelector(".testimonial-slider");
    let totalSlides = document.querySelectorAll(".testimonial-card").length;

    if (!slides) {
      console.error("Slider not found!");
      return;
    }

    if (index > totalSlides - 3) {
      index = 0;
    } else if (index < 0) {
      index = totalSlides - 3;
    }

    let move = -index * 50; // 50% shift to show two cards at a time
    slides.style.transform = `translateX(${move}%)`;
  }

  function nextSlide() {
    index++;
    showSlide();
    
  }

  function prevSlide() {
    index--;
    showSlide();
  }

  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Initial setup
  showSlide();
});



export default Home;
