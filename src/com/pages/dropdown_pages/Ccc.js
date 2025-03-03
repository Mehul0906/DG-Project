import React, { useEffect } from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function Ccc() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">CCC </h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/ccc.jpg" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>CCC</h2>
                            <p>NIELIT CCC course is designed to equip individuals with the basic computer knowledge to use computers in both professional and daily life</p>
                            <div className='course_button'>
                                <button>Course Duration <span>3 Months</span></button>
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
            {/* <section className='courses_icon'>
        <div className='container'>
          <ul className='courses_icon_img'>
            <li><img src="./img/digital2.png" alt="" /><p>CMS Hub</p></li>
            <li><img src="./img/digital3.jpg" alt="" /><p>Canvas</p></li>
            <li><img src="./img/digital4.png" alt="" /><p>Semrush</p></li>

          </ul>

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
                                    Fundamental of Computer
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Basic Concept Of Computer</p>
                                    <p><FaRegCircleCheck />Types Of Mouse</p>
                                    <p><FaRegCircleCheck />Types Of Keyboard</p>
                                    <p><FaRegCircleCheck />Hardware Software Information</p>
                                    <p><FaRegCircleCheck />How To Install & Uninstall Software</p>
                                    <p><FaRegCircleCheck />Control Panel  </p>



                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Notpad
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Typing Practice</p>
                                    <p><FaRegCircleCheck />All Menu & Shortcut Key</p>
                                    <p><FaRegCircleCheck />Command & Command Shortcut Key</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    MS Paint
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Intro.to MS Paint</p>
                                    <p><FaRegCircleCheck />Tools & Shapes</p>
                                    <p><FaRegCircleCheck />Drawing Practice</p>

                                    <p><FaRegCircleCheck />Student Project</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    Wordpad
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Intro. to Wordpad</p>
                                    <p><FaRegCircleCheck />Shortcut to Font/Alignment/Bold/Italic/Underline etc..</p>
                                    <p><FaRegCircleCheck />How to insert Object In Wordpad</p>
                                    <p><FaRegCircleCheck />Ruler Measurement Setting</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    MS Word
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Intro.to Word/Commands/Tools</p>
                                    <p><FaRegCircleCheck />Typing Practice With Different Language(Gujarati/Hindi)</p>
                                    <p><FaRegCircleCheck />Creating Resume & Application & Documents</p>
                                    <p><FaRegCircleCheck />SmartArt & Chart Practice</p>
                                    <p><FaRegCircleCheck />Watermark</p>
                                    <p><FaRegCircleCheck />Page Colour & Page Border</p>
                                    <p><FaRegCircleCheck />Mail Merge</p>
                                    <p><FaRegCircleCheck />Create Table</p>
                                    <p><FaRegCircleCheck />Macros</p>
                                    <p><FaRegCircleCheck />Graphics Visiting Card</p>
                                    <p><FaRegCircleCheck />Brochure Design etc...</p>
                                    <p><FaRegCircleCheck />Student Project</p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                    Excel
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Intro.& Basic Concept Of Excels</p>
                                    <p><FaRegCircleCheck />Working With Formula And Function</p>
                                    <p><FaRegCircleCheck />Filtering And Pivot Table And Different Chart</p>
                                    <p><FaRegCircleCheck />Create Industrial Payroll System</p>
                                    <p><FaRegCircleCheck />Create & Manage Accounting Sheet    </p>
                                    <p><FaRegCircleCheck />Attendance Register & GST Calculation</p>
                                    <p><FaRegCircleCheck />V Lookup/H Lookup</p>
                                    <p><FaRegCircleCheck />Production Report</p>
                                    <p><FaRegCircleCheck />Age Calculation</p>
                                    <p><FaRegCircleCheck />Fees Register</p>
                                    <p><FaRegCircleCheck />Stock Report</p>
                                    <p><FaRegCircleCheck />Final Industrial Project</p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    Power Point
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Intro. And Basic Concept Of PPT</p>
                                    <p><FaRegCircleCheck />Create  Presentation And Business Presentation</p>
                                    <p><FaRegCircleCheck />Animation Effects</p>
                                    <p><FaRegCircleCheck />Basic Animated Game And Sliding</p>
                                    <p><FaRegCircleCheck />Create Solar Galaxy  </p>



                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                    Advance Internet
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Download Image,Songs And Videos</p>
                                    <p><FaRegCircleCheck />Info.Of Wikipedia And Youtube</p>
                                    <p><FaRegCircleCheck />Online Ticket Booking And Shopping</p>
                                    <p><FaRegCircleCheck />Working With Social Media & Net Banking</p>

                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <div className='course_module'>
                    <div>
                    <p><FaRegCircleDot />C & C++</p>
                    <p><FaRegCircleDot />HTML 5</p>
                    <p><FaRegCircleDot />CSS3</p>
                    <p><FaRegCircleDot />Bootstrap 5</p>
                    <p><FaRegCircleDot />Data Structure</p>
                    <p><FaRegCircleDot />Java Script</p>
                    <p><FaRegCircleDot />PHP - Laravel</p>
                    <p><FaRegCircleDot />Git & Git Hub</p>
                    <p><FaRegCircleDot />Node JS</p>
                    <p><FaRegCircleDot />Project Assignments</p>
                    <p><FaRegCircleDot />MySQL </p>
                    <p><FaRegCircleDot />mongo DB </p>
                    </div>
                  </div> */}

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Ccc
