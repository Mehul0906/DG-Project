import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Fronted() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Frontend Developer</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/frontend2.png" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Frontend Developer</h2>
                            <p>DGmultimedia is a premier institute based in Surat, offering specialized courses in digital marketing and IT training to propel your career forward.</p>
                            <p>Founded by industry experts with a passion for nurturing talent and shaping successful futures.</p>
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
                            data-aos-duration="3000"><img src="./img/Html.png" alt="" /><p>HTML5</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/css.jpg" alt="" /><p>CSS3</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/bootstrap.png" alt="" /><p>Bootstrap</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/javascript.png" alt="" /><p>Javascript</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/tailwind.png" alt="" /><p>Tailwind Css</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/react js.png" alt="" /><p>React js</p></li>
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
                                    HTML5
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />                               Introduction to HTML5</p>

                                    <p><FaRegCircleCheck /> Formatting Tags</p>

                                    <p>  <FaRegCircleCheck /> Form Elements</p>

                                    <p> <FaRegCircleCheck /> Table Layout </p>

                                    <p><FaRegCircleCheck />HTML Styles </p>

                                    <p> <FaRegCircleCheck />HTML Class </p>

                                    <p> <FaRegCircleCheck /> HTML Lists </p>

                                    <p><FaRegCircleCheck /> HTML Responsive</p>

                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    CSS3
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to CSS3 </p>

                                    <p><FaRegCircleCheck /> Syntax </p>

                                    <p>  <FaRegCircleCheck />Transform Property </p>

                                    <p> <FaRegCircleCheck />Font CSS  </p>

                                    <p><FaRegCircleCheck />Border CSS  </p>

                                    <p> <FaRegCircleCheck />Animation Property  </p>

                                    <p> <FaRegCircleCheck /> Filter Property </p>

                                    <p><FaRegCircleCheck /> HTML Responsive</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Bootstrap
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Media Query</p>

                                    <p><FaRegCircleCheck /> Responsive Product View </p>

                                    <p>  <FaRegCircleCheck />Responsive Navigation Menu </p>

                                    <p> <FaRegCircleCheck />Introduction to Bootstrap </p>

                                    <p><FaRegCircleCheck />Bootstrap File Implementation  </p>

                                    <p> <FaRegCircleCheck />Bootstrap Grid System </p>

                                    <p> <FaRegCircleCheck /> Bootstrap Components </p>

                                    <p><FaRegCircleCheck /> Bootstrap Utilitiess</p>

                                    <p><FaRegCircleCheck /> Project Work : Responsive Website Design </p>

                                    {/* <p>  <FaRegCircleCheck />Color </p>

                                    <p> <FaRegCircleCheck />Badges  </p>

                                    <p><FaRegCircleCheck />JavaScript  </p>

                                    <p> <FaRegCircleCheck />Navbar  </p>

                                    <p> <FaRegCircleCheck />Navs </p>

                                    <p><FaRegCircleCheck /> Popovers</p>
                                    <p><FaRegCircleCheck />Progress bars </p>

                                    <p>  <FaRegCircleCheck />Tooltip </p>

                                    <p> <FaRegCircleCheck />Forms</p>

                                    <p><FaRegCircleCheck />Functions  </p>

                                    <p> <FaRegCircleCheck />Jumbotron</p>

                                    <p> <FaRegCircleCheck />Labels</p>

                                    <p><FaRegCircleCheck /> Lists</p>
                                    <p> <FaRegCircleCheck />Modal</p>

                                    <p> <FaRegCircleCheck />Scrollspy</p>

                                    <p><FaRegCircleCheck /> Tab   </p> */}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    JavaScript
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to JavaScript </p>

                                    <p><FaRegCircleCheck /> Syntax </p>
                                    <p><FaRegCircleCheck />JavaScript basics</p>

                                    <p>  <FaRegCircleCheck />Async programming </p>

                                    <p> <FaRegCircleCheck />Hoisting </p>

                                    <p><FaRegCircleCheck />Loops  </p>

                                    <p> <FaRegCircleCheck />Promises  </p>

                                    <p> <FaRegCircleCheck /> Scope </p>

                                    <p><FaRegCircleCheck /> Arrow functions</p>

                                    <p><FaRegCircleCheck /> Callbacks </p>

                                    <p>  <FaRegCircleCheck />Classes </p>

                                    <p> <FaRegCircleCheck />Closures  </p>

                                    <p><FaRegCircleCheck />Prototypal inheritance  </p>

                                    <p> <FaRegCircleCheck />Advanced concepts of functions  </p>

                                    <p> <FaRegCircleCheck />Data types </p>

                                    <p><FaRegCircleCheck /> Design patterns</p>
                                    <p><FaRegCircleCheck />Event loop </p>

                                    <p>  <FaRegCircleCheck />Functions </p>

                                    <p> <FaRegCircleCheck />JavaScript objects</p>

                                    <p><FaRegCircleCheck />Modules  </p>

                                    <p> <FaRegCircleCheck />Oop</p>

                                    <p> <FaRegCircleCheck />Regex</p>

                                    <p><FaRegCircleCheck /> String</p>
                                    <p> <FaRegCircleCheck />Advanced control flow</p>

                                    <p> <FaRegCircleCheck />Arithmetic expressions</p>

                                    <p><FaRegCircleCheck /> Arrays   </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    Tailwind CSS
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Tailwind CSS </p>

                                    <p><FaRegCircleCheck /> Syntax </p>

                                    <p>  <FaRegCircleCheck />Tailwind CSS Layout </p>

                                    <p> <FaRegCircleCheck />Tailwind CSS Flexbox</p>

                                    <p><FaRegCircleCheck />Tailwind CSS Grid  </p>

                                    <p> <FaRegCircleCheck />Tailwind CSS Alignment  </p>

                                    <p> <FaRegCircleCheck /> Tailwind CSS Spacing </p>

                                    <p><FaRegCircleCheck /> Tailwind CSS Sizing</p>

                                    <p><FaRegCircleCheck /> Tailwind CSS Typography </p>

                                    <p>  <FaRegCircleCheck />Tailwind CSS Backgrounds </p>

                                    <p> <FaRegCircleCheck />Tailwind CSS Borders  </p>

                                    <p><FaRegCircleCheck />Tailwind CSS Effects  </p>

                                    <p> <FaRegCircleCheck />Tailwind Filters  </p>

                                    <p> <FaRegCircleCheck />Tailwind CSS Tables </p>

                                    <p><FaRegCircleCheck /> Tailwind CSS Transitions and Animation</p>
                                    <p><FaRegCircleCheck />Tailwind CSS Transforms </p>

                                    <p>  <FaRegCircleCheck />Tailwind CSS Interactivity </p>

                                    <p> <FaRegCircleCheck />Tailwind CSS SVG</p>

                                    <p><FaRegCircleCheck />Tailwind CSS Screen Readers  </p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    React JS
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to React JS </p>

                                    <p><FaRegCircleCheck /> Syntax </p>

                                    <p>  <FaRegCircleCheck />Jsx </p>

                                    <p> <FaRegCircleCheck />React </p>

                                    <p><FaRegCircleCheck />Components  </p>

                                    <p> <FaRegCircleCheck />Props  </p>

                                    <p> <FaRegCircleCheck /> Lifecycle methods </p>

                                    <p><FaRegCircleCheck /> React components</p>

                                    <p><FaRegCircleCheck /> React Hooks </p>

                                    <p>  <FaRegCircleCheck />React state </p>

                                    <p> <FaRegCircleCheck />Redux  </p>

                                    <p><FaRegCircleCheck />Context  </p>

                                    <p> <FaRegCircleCheck />Virtual DOM  </p>

                                    <p> <FaRegCircleCheck />Conditional rendering </p>

                                    <p><FaRegCircleCheck /> Array methods</p>
                                    <p><FaRegCircleCheck />Data binding </p>

                                    <p>  <FaRegCircleCheck />Destructuring </p>

                                    <p> <FaRegCircleCheck />React events</p>

                                    <p><FaRegCircleCheck />React lists </p>

                                    <p> <FaRegCircleCheck />React lifecycle</p>

                                    <p> <FaRegCircleCheck />React Router</p>

                                    <p><FaRegCircleCheck /> ReactJS advantages</p>
                                    <p> <FaRegCircleCheck />State</p>

                                    <p> <FaRegCircleCheck />Callbacks</p>


                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    Live Project
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Portfolio Website </p>
                                    <p><FaRegCircleCheck /> E-commerce Website </p>
                                    <p>  <FaRegCircleCheck />Interactive Web App </p>
                                    <p> <FaRegCircleCheck />Responsive Design </p>
                                    <p><FaRegCircleCheck />API Integration  </p>
                                    <p> <FaRegCircleCheck />Social Media Dashboard  </p>
                                    <p> <FaRegCircleCheck /> Personal Blog</p>
                                    <p><FaRegCircleCheck /> Interactive Maps</p>
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

export default Fronted
