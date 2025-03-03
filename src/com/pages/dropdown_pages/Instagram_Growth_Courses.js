import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Instagram_Growth_Courses() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Instagram Growth Courses</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/instrgram1.png" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Instagram Growth Courses</h2>
                            <p> A Social Media Influencer is a user on social media who has established credibility in a specific industry. These content creators have access to a large audience and can share information to persuade others and drive social media engagement through their authenticity and reach.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>1 Months</span></button>
                                <button>Daily Time <span>1 Hours</span></button>
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
            {/* <section className='courses_icon'>
                <div className='container'>
                    <ul className='courses_icon_img'>
                        <li><img src="./img/digital2.png" alt="" /><p>CMS Hub</p></li>
                        <li><img src="./img/digital3.jpg" alt="" /><p>Canvas</p></li>
                        <li><img src="./img/digital4.png" alt="" /><p>Semrush</p></li>
                        
                    </ul>
                  
                </div>
            </section> */}

            {/* <section className='subject_section'>
                <div className='container'>
                    <div className="offer_title course_module_title">
                        <h2>Course Modules</h2>

                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Instagram Profiles Type & Creation
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Profile Picture</p>
                                    <p><FaRegCircleCheck /> Username and Name</p>
                                    <p>  <FaRegCircleCheck />Bio</p>
                                </div>
                            </div>

                        </div>




                    </div>
                    
                </div>
            </section> */}

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
                                    Instagram Profiles Type & Creation
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Profile Picture</p>
                                    <p><FaRegCircleCheck /> Username and Name</p>
                                    <p>  <FaRegCircleCheck />Bio</p>
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Instagram Algorithm
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Engagement</p>

                                    <p><FaRegCircleCheck />Relevancy</p>

                                    <p>  <FaRegCircleCheck />Timeliness </p>

                                    <p> <FaRegCircleCheck />Relationship</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Instagram Management
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Content Strategy </p>
                                    <p> <FaRegCircleCheck />Audience Engagement</p>

                                    <p><FaRegCircleCheck />Hashtag Strategy</p>

                                    <p>  <FaRegCircleCheck />Analytics and Insights</p>
                                    <p> <FaRegCircleCheck /> Community Building  </p>
                                    <p> <FaRegCircleCheck />Instagram Stories </p>

                                    <p><FaRegCircleCheck /> Advertising and Promotions</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    Instagram Reels Creation
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Content Strategy </p>
                                    <p> <FaRegCircleCheck />Creative Concept</p>

                                    <p><FaRegCircleCheck />Editing Techniques</p>

                                    <p>  <FaRegCircleCheck />Optimization for Discovery</p>
                                    <p> <FaRegCircleCheck /> Engagement Strategy</p>
                                    <p> <FaRegCircleCheck />Analytics and Iteration</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    Instagram Post & Grid Creation
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Stick to a single color palette</p>

                                    <p><FaRegCircleCheck />Create a checkerboard effect </p>

                                    <p>  <FaRegCircleCheck />Design row by row or column by column  </p>

                                    <p> <FaRegCircleCheck />Let typography own your grid</p>
                                    <p><FaRegCircleCheck /> Turn your grid into the rainbow </p>

                                    <p>  <FaRegCircleCheck />Embrace your brand color(s) </p>

                                    <p> <FaRegCircleCheck />Connect your photos across borders</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    Instagram Monetization
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">

                                    <p> <FaRegCircleCheck /> Work with brands </p>
                                    <p> <FaRegCircleCheck />Eligibility requirements</p>
                                    <p> <FaRegCircleCheck />Join an affiliate marketing program</p>

                                    <p><FaRegCircleCheck /> Eligibility requirements </p>

                                    <p>  <FaRegCircleCheck />Use Badges in livestreams</p>
                                    <p> <FaRegCircleCheck />Earn milestone bonuses</p>
                                    <p> <FaRegCircleCheck />Enable Instagram subscriptions </p>



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

export default Instagram_Growth_Courses
