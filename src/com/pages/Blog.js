import React from 'react'
import Footer from './Footer'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


function Blog() {
  return (
    <>
      <div className='home_area home_page_img blog_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Blog</h1>
        </div>
      </div>
      <section className='blog_section'>
        <div className='container'>
          <div className='blog_row'>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/blog1.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Crafting Captivating Headlines: Your awesome post title goes here</h4>
                <span>May 7, 2024</span>
                <p>Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction</p>
                <span>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/blog2.jpeg" alt="" />
              <div className='blog_details'>
                <h4>The Art of Drawing Readers In: Your attractive post title goes here</h4>
                <span>May 7, 2024</span>
                <p>Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction</p>
                <span>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/blog3.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Mastering the First Impression: Your intriguing post title goes here</h4>
                <span>May 7, 2024</span>
                <p>Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction</p>
                <span>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/images.jpg" alt="" />
              <div className='blog_details'>
                <h4>Hello world!</h4>
                <span>May 4, 2024</span>
                <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
                <span>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/blog3.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Hello world!</h4>
                <span>May 4, 2024</span>
                <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
                <span>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/blog1.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Hello world!</h4>
                <span>May 4, 2024</span>
                <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
                <span>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog
