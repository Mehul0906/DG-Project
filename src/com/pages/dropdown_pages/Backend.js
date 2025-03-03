import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Backend() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Backend Developer</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/backend2.png" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Backend Developer</h2>
                            <p>DGmultimedia is a premier institute based in Surat, offering specialized courses in digital marketing and IT training to propel your career forward.</p>
                            <p>Founded by industry experts with a passion for nurturing talent and shaping successful futures.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>8 Months</span></button>
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
                            data-aos-duration="3000"><img src="./img/javascript.png" alt="" /><p>Javascript</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/mysql.jpg" alt="" /><p>MySql</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/node.png" alt="" /><p>Node js</p></li>
                        <li data-aos="fade-up"
                            data-aos-duration="3000"><img src="./img/mongo.png" alt="" /><p>Mongo DB</p></li>
                        {/* <li><img src="./img/javascript.png" alt="" /><p>Javascript</p></li>
                        <li><img src="./img/tailwind.png" alt="" /><p>Tailwind Css</p></li>
                        <li><img src="./img/react js.png" alt="" /><p>React js</p></li> */}
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
                                    C Programming
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Introduction to C</p>
                                    <p><FaRegCircleCheck /> Syntax</p>
                                    <p>  <FaRegCircleCheck /> Operators and Expressions </p>
                                    <p> <FaRegCircleCheck />Data Types </p>
                                    <p><FaRegCircleCheck />Input-Output Library Functions </p>
                                    <p> <FaRegCircleCheck />Conditional Statements  </p>
                                    <p> <FaRegCircleCheck />Function in C language </p>
                                    <p><FaRegCircleCheck />Storage Class</p>
                                    <p>  <FaRegCircleCheck /> Pointer in C Programming </p>
                                    <p> <FaRegCircleCheck />Pointer and Function ( Passing Parameter Techniques) </p>
                                    <p><FaRegCircleCheck />Array in C language </p>
                                    <p> <FaRegCircleCheck />Pointer and One Dimensional Arrays  </p>
                                    <p> <FaRegCircleCheck />Array and Function </p>
                                    <p><FaRegCircleCheck />Dynamic Memory Allocation</p>
                                    <p><FaRegCircleCheck />Strings in C Programming language</p>
                                    <p>  <FaRegCircleCheck /> Command Line Arguments </p>
                                    <p> <FaRegCircleCheck />Preprocessor in C  </p>
                                    <p><FaRegCircleCheck />Structure in C</p>
                                    <p> <FaRegCircleCheck />Structure and Function in C  </p>
                                    <p> <FaRegCircleCheck />Union and Enumeration and Typedef</p>
                                    <p><FaRegCircleCheck />File Handling in C </p>


                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    C++
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to C++</p>
                                    <p><FaRegCircleCheck /> Syntax</p>
                                    <p>  <FaRegCircleCheck /> C++ Compiler </p>
                                    <p> <FaRegCircleCheck />Structure of a program </p>
                                    <p><FaRegCircleCheck />Variables </p>
                                    <p> <FaRegCircleCheck />C++ Basic Elements  </p>
                                    <p> <FaRegCircleCheck />Operators </p>
                                    <p><FaRegCircleCheck />Data Types</p>
                                    <p>  <FaRegCircleCheck />Input/Output in C++</p>
                                    <p> <FaRegCircleCheck />Conditional Structure</p>
                                    <p><FaRegCircleCheck />Looping Structure </p>
                                    <p> <FaRegCircleCheck />Library Functions  </p>
                                    <p> <FaRegCircleCheck />User Defined Functions </p>
                                    <p><FaRegCircleCheck />Array - Single Dimension</p>
                                    <p><FaRegCircleCheck />Array - Multi Dimension</p>
                                    <p>  <FaRegCircleCheck />String - Character Array </p>
                                    <p> <FaRegCircleCheck />Structures and other Data type  </p>
                                    <p><FaRegCircleCheck />Pointers</p>
                                    <p> <FaRegCircleCheck />OOP Concepts  </p>
                                    <p> <FaRegCircleCheck />Introducing Classes</p>
                                    <p><FaRegCircleCheck />Constructor and Destructor</p>
                                    <p> <FaRegCircleCheck />Case Study : Time Class </p>
                                    <p> <FaRegCircleCheck />Separate Header and Implementation Files </p>
                                    <p><FaRegCircleCheck />Static Members</p>
                                    <p><FaRegCircleCheck />Friend Functions and Friend Classes</p>
                                    <p>  <FaRegCircleCheck />Operator Overloading</p>
                                    <p> <FaRegCircleCheck />Inheritance - I  </p>
                                    <p><FaRegCircleCheck />Inheritance - II</p>
                                    <p> <FaRegCircleCheck />Polymorphism and Virtual Function  </p>
                                    <p> <FaRegCircleCheck />File Handling Basics</p>
                                    <p><FaRegCircleCheck />Text File and Binary File</p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    JavaScript
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    MySQL
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to MYSQL </p>
                                    <p><FaRegCircleCheck /> Syntax </p>
                                    <p><FaRegCircleCheck />Cloud applications</p>
                                    <p>  <FaRegCircleCheck />Content management </p>
                                    <p> <FaRegCircleCheck />Ecommerce </p>
                                    <p><FaRegCircleCheck />Saas and isvs  </p>
                                    <p> <FaRegCircleCheck />Social platforms  </p>
                                    <p> <FaRegCircleCheck /> Create database </p>
                                    <p><FaRegCircleCheck /> Create table</p>
                                    <p><FaRegCircleCheck /> MySQL Cookbook </p>
                                    <p>  <FaRegCircleCheck />Alter table </p>
                                    <p> <FaRegCircleCheck />Delete table  </p>
                                    <p><FaRegCircleCheck />Drop database </p>
                                    <p> <FaRegCircleCheck />Index</p>
                                    <p> <FaRegCircleCheck />Insert into </p>
                                    <p><FaRegCircleCheck /> MySQL aliases</p>
                                    <p><FaRegCircleCheck />Overview </p>
                                    <p>  <FaRegCircleCheck />SHOW database </p>
                                    <p> <FaRegCircleCheck />UPDATE table</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    Node.js
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Node.js </p>
                                    <p><FaRegCircleCheck /> Syntax </p>
                                    <p>  <FaRegCircleCheck />Debugging </p>
                                    <p> <FaRegCircleCheck />Install Node js</p>
                                    <p><FaRegCircleCheck />Async/await  </p>
                                    <p> <FaRegCircleCheck />JavaScript  </p>
                                    <p> <FaRegCircleCheck />CORS in nodejs </p>
                                    <p><FaRegCircleCheck />Node JS REPL</p>
                                    <p><FaRegCircleCheck /> Npm and Yarn </p>
                                    <p>  <FaRegCircleCheck />Process api in nodejs</p>
                                    <p> <FaRegCircleCheck />Timers </p>
                                    <p><FaRegCircleCheck />Arrow functions  </p>
                                    <p> <FaRegCircleCheck />Closures </p>
                                    <p> <FaRegCircleCheck />Email sender </p>
                                    <p><FaRegCircleCheck /> JS event loop</p>
                                    <p><FaRegCircleCheck />Loops </p>
                                    <p>  <FaRegCircleCheck />Middleware in Nodejs </p>
                                    <p> <FaRegCircleCheck />MongoDB</p>
                                    <p><FaRegCircleCheck />Node js Express </p>
                                    <p> <FaRegCircleCheck />Portfolio app</p>
                                    <p><FaRegCircleCheck />Streams </p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    MongoDB
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
                                    <p> <FaRegCircleCheck />Trusted, Community Based Carpooling</p>
                                    <p><FaRegCircleCheck /> E-commerce Portal</p>
                                    <p>  <FaRegCircleCheck />To-do List - Full Stack Application </p>
                                    <p> <FaRegCircleCheck />Foody - Online Food Ordering System</p>
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

export default Backend
