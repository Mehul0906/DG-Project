import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Ui_ux() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">UI/UX Design</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/ui_ux2.png" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>UI/UX Design</h2>
                            <p>Our UI/UX course combines the best practices in UI/UX to equip you with the knowledge and skills needed to create dynamic web & App Designs.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>6 Months</span></button>
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
                            data-aos-duration="3000"><img src="./img/photoshop.png" alt="" /><p>Adobe Photoshop</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/adobe_illustrator.png" alt="" /><p>Adobe illustrator</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/figma.jpg" alt="" /><p>Figma</p></li>
                        {/* <li><img src="./img/adobe_hd.png" alt="" /><p>Adobe XD</p></li>
                        <li><img src="./img/adobe_effect.png" alt="" /><p>Adobe After Effect</p></li> */}
                        {/* <li><img src="./img/sketch.png" alt="" /><p>Sketch</p></li> */}
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
                                    Figma
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Introduction to Figma Design</p>
                                    <p><FaRegCircleCheck />Type of Wireframing</p>
                                    <p>  <FaRegCircleCheck /> Consistancy of Color, Fonts, Grid, Color & Icon</p>
                                    <p> <FaRegCircleCheck />Website Interactions & Prototyping </p>
                                    <p><FaRegCircleCheck />Assets and File Manage</p>
                                    <p> <FaRegCircleCheck />Explore Text & Styles  </p>
                                    <p> <FaRegCircleCheck />Install Plugins</p>
                                    <p><FaRegCircleCheck />Global Design System for your Brand</p>
                                    {/* <p>  <FaRegCircleCheck /> Autolayouts & Constraints </p>
                                    <p> <FaRegCircleCheck />Effects </p>
                                    <p><FaRegCircleCheck />Components & Instances</p>
                                    <p> <FaRegCircleCheck />Varients, Variables & Forms  </p>
                                    <p> <FaRegCircleCheck />Prototype Add On</p>
                                    <p><FaRegCircleCheck />Animation & Micro Interactions</p>
                                    <p><FaRegCircleCheck />Teams, Projects, Libraries, Thumbnails & Export</p>
                                    <p>  <FaRegCircleCheck />HTML head Elements </p> */}
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Photoshop
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Photoshop</p>
                                    <p><FaRegCircleCheck /> Color Correction</p>
                                    <p>  <FaRegCircleCheck />Image Editing </p>
                                    <p> <FaRegCircleCheck />Typography</p>
                                    <p> <FaRegCircleCheck />Character Design</p>
                                    <p><FaRegCircleCheck /> Mockup Design</p>
                                    <p>  <FaRegCircleCheck />Marketing post Design </p>
                                    <p> <FaRegCircleCheck />Product and Website Banner Design</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Illustrator
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Introduction to Illustrator</p>
                                    <p><FaRegCircleCheck />Icon Design</p>
                                    <p><FaRegCircleCheck />3D Design </p>
                                    <p><FaRegCircleCheck />Perspective 3D</p>
                                    <p><FaRegCircleCheck />2D Game Character Design</p>
                                    <p><FaRegCircleCheck />2D Game Background Design</p>
                                    <p><FaRegCircleCheck />2D / 3D Infographic Elements </p>
                                    <p><FaRegCircleCheck />Isometric Elements</p>
                                    <p><FaRegCircleCheck />Logo Design</p>

                                </div>
                            </div>
                        </div>
                       
                       
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                    Live Project
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Website Banner Design</p>
                                    <p><FaRegCircleCheck />Game Background Design</p>
                                    <p><FaRegCircleCheck />Create Game UI Design</p>
                                    <p><FaRegCircleCheck />Create Mobile UI Design</p>
                                    <p><FaRegCircleCheck />Create Web UI Design</p>



                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className='course_module'>
                        <div>
                            <p><FaRegCircleDot />Photoshop</p>
                            <p><FaRegCircleDot />Illustrator</p>
                            <p><FaRegCircleDot />Adobe XD</p>
                            <p><FaRegCircleDot />Figma</p>
                            <p><FaRegCircleDot />After Effects</p>
                            <p><FaRegCircleDot />Live Project</p>
                        </div>
                    </div> */}
                    {/* <p><FaRegCircleDot />React JS</p>
                    <p><FaRegCircleDot />Git & Git Hub</p>
                    <p><FaRegCircleDot />Project Assignments</p> */}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Ui_ux
