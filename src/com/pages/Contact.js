import React, { useEffect } from 'react'
import Footer from './Footer'

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value.slice(0, 10);
  };
  return (
    <>
      <div className='home_area home_page_img contact_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Contact Us</h1>
        </div>
      </div>
      <section className='contact_section'>
        <div className='container'>
          <div className='contact_title' data-aos="fade-up"
                        data-aos-duration="3000">
            <h2>Get in Touch</h2>
            <p>Let us know how we can assist you on your digital marketing and IT journey.</p>
          </div>
          <div className='contact_row'>
            <div className='contact_details'  data-aos="fade-right"
                        data-aos-duration="3000">
              <div className="contact_info">
                <IoCall />
                <div>
                  <h6>Phone:</h6>
                  <p>+91 91047 90039</p>
                </div>
              </div>
              <div className="contact_info" >
                <MdEmail />
                <div>
                  <h6>Email:</h6>
                  <p>info@dgmultimedia.in</p>
                </div>
              </div>
              <div className="contact_info">
                <FaLocationDot />
                <div>
                  <h6>Address:</h6>
                  <p>301, Madhav Shopping Center , Godadara , Surat.</p>
                </div>
              </div>
            
            </div>
            <div className='contact_form'  data-aos="fade-left"
                        data-aos-duration="3000">
              <form action="">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Your Name' required />
                <label htmlFor="">Email id</label>
                <input type="email" name="" id="" placeholder='Enter your Email id' required />
                <label htmlFor="">Course</label>
                <input type="text" placeholder='Enter your Course' required />
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder='Enter your Phone Number' required   onInput={handleNumberInput}/>
                {/* <button className='contact_button' type='submit'>Submit</button> */}
                <button type="submit" className='contact_button'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className='container' >
        <div className='map'  data-aos="fade-up"
                        data-aos-duration="3000">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4200835285415!2d72.87456922382201!3d21.175464832726362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc87b5fdfcb%3A0x2d136e6092ed978a!2sDg%20Multimedia%20Education%20Institute!5e0!3m2!1sen!2sin!4v1717577495362!5m2!1sen!2sin" frameborder="0"></iframe>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
