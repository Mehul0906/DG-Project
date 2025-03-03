import React, { useEffect } from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function Artificial_Intelligence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Artificial Intelligence</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">

              <img src="./img/artificial.jpg" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
              <h2>Artificial Intelligence</h2>
              <p>Artificial Intelligence is a method of making a computer, a computer-controlled robot, or a software think intelligently like the human mind</p>
              <div className='course_button'>
                <button>Course Duration <span>12 Months</span></button>
                <button>Daily Time <span>2 Hours</span></button>
              </div>
              <div className='include_course'>
                <h5>Included In This Course:</h5>
                <ul>
                  <li><FaCheck />Job Support</li>
                  <li><FaCheck />Rich Learning Content</li>
                  <li><FaCheck />Taught by Experienced Prof.</li>
                  <li><FaCheck />Industry Oriented Projects</li>
                </ul>
              </div>
              <Link to="https://wa.me/9104790039" target="_blank"><button className='button'>Inquiry Now</button></Link>
            </div>
          </div>
        </div>
      </section>
      <section className='courses_icon'>
        <div className='container'>
          <ul className='courses_icon_img'>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/c.jpg" alt="" /><p>C</p></li>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/c++.jpg" alt="" /><p>C++</p></li>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/java.webp" alt="" /><p>Java</p></li>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/python.png" alt="" /><p>Python</p></li>
            <li data-aos="fade-up"
              data-aos-duration="3000"><img src="./img/tensorflow.png" alt="" />TensorFlow</li>
          </ul>

        </div>
      </section>



      <section className='subject_section' data-aos="fade-up"
        data-aos-duration="3000">
        <div className='container'>
          <div className="offer_title course_module_title">
            <h2>Course Modules</h2>

          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Artificial Intelligence
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />C/C++</p>
                  <p><FaRegCircleCheck />DSA</p>
                  <p>  <FaRegCircleCheck />Python </p>
                  <p> <FaRegCircleCheck />Numpy</p>
                  <p> <FaRegCircleCheck />Seaborn</p>
                  <p><FaRegCircleCheck /> Theano</p>

                  <p> <FaRegCircleCheck />Pandas</p>
                  <p><FaRegCircleCheck />PyTorch</p>
                  <p>  <FaRegCircleCheck />TensorFlow </p>
                  <p> <FaRegCircleCheck />Scikit-Learn</p>
                  <p> <FaRegCircleCheck />Matplotlib</p>
                  <p><FaRegCircleCheck /> Theano</p>

                </div>
              </div>

            </div>




          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Artificial_Intelligence
