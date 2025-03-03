import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Animation_master() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Master in 2D/3D animation</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">
                       
                            <img src="./img\master_animation.jpg" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
                            <h2>Master in 2D/3D animation</h2>
                            <p>The Animation is the art of bringing life to visual objects, or 3D generated characters and image.</p>
                            <p>The Animation is created by projecting sequenced images quickly, one after another, to create the illusion of life-visual.</p>
                            <p>Animation Courses in Surat recognize that Today’s world telling a story is a great technique for characterized by cartoon characters - in- motion.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>18 Months</span></button>
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
                                    Adobe Photoshop
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Intro. Tools and User interface </p>

                                    <p><FaRegCircleCheck />Color Corrections  </p>

                                    <p>  <FaRegCircleCheck />Image Editing </p>

                                    <p> <FaRegCircleCheck />Concept based Character Design </p>

                                    <p><FaRegCircleCheck />Game Background Design  </p>

                                    <p> <FaRegCircleCheck />Game Poster/Banner Design </p>

                                    <p> <FaRegCircleCheck /> Game Realistic Texture Design for 3D  </p>

                                    <p><FaRegCircleCheck /> Layer Style, Layer Masking </p>
                                    <p><FaRegCircleCheck /> Filter Effects</p>

                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Adobe Illustrator
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Intro. Tools and User interface </p>
                                    <p> <FaRegCircleCheck />Reshaping, Alignments & Path Finder </p>

                                    <p><FaRegCircleCheck /> Vector Game Background Design </p>

                                    <p>  <FaRegCircleCheck />Vector Game Character Design  </p>
                                    <p> <FaRegCircleCheck /> 3D Revolve to 3d shape Design  </p>
                                    <p> <FaRegCircleCheck />3D Extrude to 3d Props Design  </p>

                                    <p><FaRegCircleCheck /> 3D Perspective Design  </p>

                                    <p>  <FaRegCircleCheck />Infographics Design </p>

                                    <p>  <FaRegCircleCheck />Filter Effects</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Adobe Animate
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Intro. Tools and User interface </p>
                                    <p> <FaRegCircleCheck /> Intro. Tools and User interface</p>

                                    <p><FaRegCircleCheck />Artwork Design</p>

                                    <p>  <FaRegCircleCheck />Uses of Symbols and Library </p>

                                    <p> <FaRegCircleCheck /> Layer and Masking</p>
                                    <p> <FaRegCircleCheck />Principal of Animation</p>

                                    <p><FaRegCircleCheck />Animation Technics</p>

                                    <p>  <FaRegCircleCheck />Tween Base Animation </p>
                                    <p> <FaRegCircleCheck /> Secondary Animation</p>
                                    <p> <FaRegCircleCheck />Human Walk Cycle Animation</p>

                                    <p><FaRegCircleCheck /> Facial expression/Animation</p>

                                    <p>  <FaRegCircleCheck />Lip-Synch for Dialogue</p>
                                    <p><FaRegCircleCheck /> Working with Sound</p>

                                    <p>  <FaRegCircleCheck />Filter and Effects</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                Adobe After Effects
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Intro. Tools and User interface </p>

                                    <p><FaRegCircleCheck />Layer-Concept Animation  </p>

                                    <p>  <FaRegCircleCheck />Product Presentation </p>

                                    <p> <FaRegCircleCheck />Time Remapping </p>

                                    <p><FaRegCircleCheck />Working with Sound  </p>
                                    <p> <FaRegCircleCheck />Rotomasking  </p>

                                    <p><FaRegCircleCheck />Green Screen Effects </p>

                                    <p>  <FaRegCircleCheck />Color Correction </p>

                                    <p> <FaRegCircleCheck />3D Layer and 3D Camera Animation </p>

                                    <p><FaRegCircleCheck />Camera Tracking </p>

                                    <p>  <FaRegCircleCheck />Video Stabilizing </p>

                                    <p> <FaRegCircleCheck />Motion Graphics  </p>

                                    <p><FaRegCircleCheck />Effects and Render</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    Maya
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Modeling</p>

                                    <p><FaRegCircleCheck />Texturing </p>

                                    <p>  <FaRegCircleCheck />Lighting</p>

                                    <p> <FaRegCircleCheck />Rigging</p>

                                    <p><FaRegCircleCheck />Animation </p>
                                    <p> <FaRegCircleCheck />Pericles and Dynamics </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    Blender
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Intro. Tools and User interface </p>
                                    <p> <FaRegCircleCheck />Game Props Design Low Poly Character Design.</p>
                                    <p> <FaRegCircleCheck />Sculpting and Details Design</p>
                                    <p> <FaRegCircleCheck />Texturing/Shading Details </p>

                                    <p> <FaRegCircleCheck />Game Character Rigging/Skinning</p>
                                    <p> <FaRegCircleCheck />Game Character Animation</p>
                                    <p> <FaRegCircleCheck />Game File Import/Export/Rending Image and Video</p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    Adobe Audition
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Intro. Tools and User interface </p>
                                    <p> <FaRegCircleCheck />Audio Pitch Control </p>
                                    <p> <FaRegCircleCheck />Audio Effects and Transitions</p>
                                    <p> <FaRegCircleCheck />Add & Remove Vocals  </p>

                                    <p> <FaRegCircleCheck />Export Audio File</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                    Live Project
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />3D Modeling</p>

                                    <p><FaRegCircleCheck />3D Texturing</p>

                                    <p>  <FaRegCircleCheck />Animated Promo</p>

                                    <p> <FaRegCircleCheck />3D Character Animation </p>

                                    <p><FaRegCircleCheck />Camera Animation</p>
                                    <p> <FaRegCircleCheck />Particles Animation</p>

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

export default Animation_master
