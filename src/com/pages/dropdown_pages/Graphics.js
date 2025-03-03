import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Graphics() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Graphics Design</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img\graphic_design.png" alt="" />

                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Graphics Design</h2>
                            <p>Graphics Design for Your Creatives Future in Graphics Field. Now , Create Visiting Card, Flax Banner, Web Banner, Logo, Pamphlets, Catalogues, etc.</p>
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
                            data-aos-duration="3000"><img src="./img/coreldraw.jpeg" alt="" /><p>CorelDRAW</p></li>
                        {/* <li><img src="./img/adobe_hd.png" alt="" /><p>Adobe XD</p></li>
                        <li><img src="./img/adobe_effect.png" alt="" /><p>Adobe After Effect</p></li> */}
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
                                    Photoshop
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Photoshop</p>
                                    <p><FaRegCircleCheck /> Color Correction</p>
                                    <p>  <FaRegCircleCheck />Image Editing </p>
                                    <p> <FaRegCircleCheck />Typography</p>
                                    <p> <FaRegCircleCheck />Character Design</p>
                                    <p><FaRegCircleCheck /> Mockup Design</p>
                                    <p><FaRegCircleCheck /> Album Page Design</p>
                                    <p>  <FaRegCircleCheck />Product Banner Design </p>
                                    <p>  <FaRegCircleCheck />Marketing post Design </p>
                                    <p> <FaRegCircleCheck />Visiting Card Design</p>
                                    <p> <FaRegCircleCheck />Brochure Design</p>
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Illustrator
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Introduction to Illustrator</p>
                                    <p><FaRegCircleCheck />Icon Design</p>
                                    <p><FaRegCircleCheck />3D Design </p>
                                    <p><FaRegCircleCheck />Perspective 3D</p>
                                    <p><FaRegCircleCheck />2D / 3D Infographic Elements </p>
                                    <p><FaRegCircleCheck />Isometric Elements</p>
                                    <p><FaRegCircleCheck />Logo Design</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    CorelDraw
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Introduction to CorelDraw</p>
                                    <p><FaRegCircleCheck />Difference b/w Raster & Vector </p>
                                    <p><FaRegCircleCheck />Reshaping Objects  </p>
                                    <p><FaRegCircleCheck />Stamp Design </p>
                                    <p><FaRegCircleCheck />Glossy Effects </p>
                                    <p><FaRegCircleCheck />Geometric Design </p>
                                    <p><FaRegCircleCheck />Visiting Card Design</p>
                                    <p><FaRegCircleCheck />Brochure / Catalog Design / Flyer Design  </p>
                                    <p><FaRegCircleCheck />Calender Design </p>
                                    <p><FaRegCircleCheck />Board Banner Design </p>
                                    <p><FaRegCircleCheck />Box Design</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    Live Project
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Product Banner Design</p>
                                    <p><FaRegCircleCheck />Visiting Card</p>
                                    <p><FaRegCircleCheck />Brochure Design</p>
                                    <p><FaRegCircleCheck />Festival Post Design</p>
                                    <p><FaRegCircleCheck />Brand Logo Design</p>
                                    <p><FaRegCircleCheck />Calender Design</p>
                                    <p><FaRegCircleCheck />Box Design</p>

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

export default Graphics
