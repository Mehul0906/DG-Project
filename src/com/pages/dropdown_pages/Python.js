import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Python() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Python</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/python1.jpg" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Python</h2>
                            <p>Python is widely used for popular application in many development environments, getting hands-on knowledge is an asset, especially if you want to make a career in Python programming.</p>
                            <p>Python is a scripting language like a pearl, ruby, and so forth.</p>
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
                                    Python: Introduction
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> What Python can do?</p>

                                    <p><FaRegCircleCheck />Advantages of Python</p>

                                    <p>  <FaRegCircleCheck />Python Evolutions</p>

                                    <p> <FaRegCircleCheck />Python Syntax compared to other programming languages </p>

                                    <p><FaRegCircleCheck />Installation of Python </p>
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Python: Basics Beginning
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />The print statement using python IDE</p>

                                    <p><FaRegCircleCheck />Comments in Python</p>

                                    <p>  <FaRegCircleCheck />Python Data Structures & Data Types </p>

                                    <p> <FaRegCircleCheck />String Operations in Python</p>

                                    <p><FaRegCircleCheck />Python Simple Input & Output</p>

                                    <p>  <FaRegCircleCheck />Simple Output Formatting</p>

                                    <p> <FaRegCircleCheck />Operators in python</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Python: Program Flow
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Indentation importance in Python</p>

                                    <p><FaRegCircleCheck />The If statement and its’ related statement </p>

                                    <p>  <FaRegCircleCheck />An example with if and it’s a related statement </p>

                                    <p> <FaRegCircleCheck />The while loop</p>
                                    <p> <FaRegCircleCheck />The for loop</p>

                                    <p><FaRegCircleCheck />The range statement</p>

                                    <p>  <FaRegCircleCheck />Break & Continue </p>

                                    <p> <FaRegCircleCheck />Assert </p>
                                    <p> <FaRegCircleCheck />Examples for looping </p>



                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">

                                    Python : Functions & Modules
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Create your own functions</p>
                                    <p><FaRegCircleCheck />Functions Parameters </p>
                                    <p><FaRegCircleCheck />Variable Arguments</p>
                                    <p> <FaRegCircleCheck />Scope of a Function</p>
                                    <p><FaRegCircleCheck />Function Documentation </p>
                                    <p><FaRegCircleCheck />Lambda Functions& map</p>
                                    <p><FaRegCircleCheck />Exercise with functions Create a Module </p>
                                    <p><FaRegCircleCheck />Standard Modules</p>



                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">

                                    Python : Exceptions Handling & Custom Error Messages

                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Errors in Python </p>
                                    <p><FaRegCircleCheck /> Exception handling with try </p>
                                    <p>  <FaRegCircleCheck />handling Multiple Exceptions</p>
                                    <p>  <FaRegCircleCheck />Writing your own Exception</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    Python : File Handling
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />File handling Modes </p>
                                    <p> <FaRegCircleCheck />Reading Files</p>
                                    <p> <FaRegCircleCheck />Writing & Appending to Files</p>
                                    <p> <FaRegCircleCheck />Handling File Exceptions</p>
                                    <p> <FaRegCircleCheck />The with statement</p>
                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    Python : Classes & Objects

                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />New Style Classes </p>

                                    <p><FaRegCircleCheck />Creating Classes</p>
                                    <p><FaRegCircleCheck />Instance Methods</p>
                                    <p> <FaRegCircleCheck />Inheritance</p>

                                    <p><FaRegCircleCheck /> Polymorphism</p>
                                    <p><FaRegCircleCheck />Exception Classes & Custom Exceptions</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">

                                    Python : Generators And Iterators
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Iterators</p>

                                    <p><FaRegCircleCheck /> Generators   </p>
                                    <p> <FaRegCircleCheck />The Functions any and all</p>

                                    <p><FaRegCircleCheck /> With Statement   </p>

                                    <p><FaRegCircleCheck /> Data Compression   </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">


                                    Python : Working With GUIs (Tkinter)
                                </button>
                            </h2>
                            <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction</p>
                                    <p> <FaRegCircleCheck />Components and Events</p>
                                    <p> <FaRegCircleCheck />An Example GUI</p>
                                    <p> <FaRegCircleCheck />The root Component</p>
                                    <p> <FaRegCircleCheck />Adding a Button</p>
                                    <p> <FaRegCircleCheck />Entry Widgets</p>
                                    <p> <FaRegCircleCheck />Text Widgets</p>
                                    <p> <FaRegCircleCheck />Check buttons</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">

                                    Python : Working With Databases (MySQL/ SQL/ SQLite)
                                </button>
                            </h2>
                            <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction</p>
                                    <p> <FaRegCircleCheck />Installation</p>
                                    <p> <FaRegCircleCheck />DB Connection</p>
                                    <p> <FaRegCircleCheck />Creating DB Table</p>
                                    <p> <FaRegCircleCheck />INSERT, READ, UPDATE, DELETE operations</p>
                                    <p> <FaRegCircleCheck />COMMIT & ROLLBACK operation</p>
                                    <p> <FaRegCircleCheck />handling Errors </p>
                                </div>
                            </div>
                        </div>




                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">

                                    Python : Date And Time
                                </button>
                            </h2>
                            <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Sleep</p>
                                    <p> <FaRegCircleCheck />Program execution time</p>
                                    <p> <FaRegCircleCheck />Other methods of date/time </p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">

                                    Django: Django Prerequisite
                                </button>
                            </h2>
                            <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />HTML5</p>
                                    <p> <FaRegCircleCheck />CSS3</p>
                                    <p> <FaRegCircleCheck />Bootstrap</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">

                                    Django: Introduction Django Framework
                                </button>
                            </h2>
                            <div id="collapsethirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Django</p>
                                    <p> <FaRegCircleCheck />Installing Django </p>
                                    <p> <FaRegCircleCheck />Setting up a database</p>
                                    <p> <FaRegCircleCheck />Starting a project</p>
                                    <p> <FaRegCircleCheck />Difference between a App and a Project</p>
                                    <p> <FaRegCircleCheck />Role of Django </p>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourteen" aria-expanded="false" aria-controls="collapsefourteen">

                                    Django: Basics Of Dynamic Web Pages
                                </button>
                            </h2>
                            <div id="collapsefourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Dynamic Content</p>
                                    <p> <FaRegCircleCheck />Mapping URLs to views</p>
                                    <p> <FaRegCircleCheck />Request Processing by Django</p>
                                    <p> <FaRegCircleCheck />A overview of settings file in Django</p>

                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">
                                    Django: Template System
                                </button>
                            </h2>
                            <div id="collapsefifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Template System Basic</p>
                                    <p> <FaRegCircleCheck />Using Template System</p>
                                    <p> <FaRegCircleCheck />Basic Template and Filters</p>
                                    <p> <FaRegCircleCheck />How to Configure Template</p>
                                    <p> <FaRegCircleCheck />Template Loading</p>
                                    <p> <FaRegCircleCheck />Template Inheritence  </p>

                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesixteen" aria-expanded="false" aria-controls="collapsesixteen">

                                    Django: Interacting With Databases
                                </button>
                            </h2>
                            <div id="collapsesixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Configuring the database</p>
                                    <p> <FaRegCircleCheck />Defining Models in Python</p>
                                    <p> <FaRegCircleCheck />Selecting and Deleting Objects</p>
                                    <p> <FaRegCircleCheck />What are Migrations and Why we do that? </p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseventeen" aria-expanded="false" aria-controls="collapseseventeen">
                                    Django: Administration Site
                                </button>
                            </h2>
                            <div id="collapseseventeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Activating the admin interface</p>
                                    <p> <FaRegCircleCheck />Using the admin interface</p>
                                    <p> <FaRegCircleCheck />Customizing the interface</p>
                                    <p> <FaRegCircleCheck />Admin part (How to create Superuser in Python)</p>
                                    <p> <FaRegCircleCheck />What are Models?</p>
                                    <p> <FaRegCircleCheck />Models and Admin Linkup</p>
                                    <p> <FaRegCircleCheck />ModelForm creation </p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeighteen" aria-expanded="false" aria-controls="collapseeighteen">
                                    Django: Advanced Views And URL Configurations
                                </button>
                            </h2>
                            <div id="collapseeighteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Streamlining Function Imports</p>
                                    <p> <FaRegCircleCheck />Using Named Group</p>
                                    <p> <FaRegCircleCheck />Capturing Texts in URLs</p>
                                    <p> <FaRegCircleCheck />URL Routing</p>
                                    <p> <FaRegCircleCheck />What is Render and relative import</p>
                                    <p> <FaRegCircleCheck />URL names as Links</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenineteen" aria-expanded="false" aria-controls="collapsenineteen">

                                    Django: Sessions And Registration

                                </button>
                            </h2>
                            <div id="collapsenineteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Djangos Session Framework</p>
                                    <p> <FaRegCircleCheck />Users and Authentication</p>
                                    <p> <FaRegCircleCheck />Permissions, Groups, Messages and Proles</p>
                                    <p> <FaRegCircleCheck />How to add Authentication in Django Project with help of Registration Redux module</p>

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

export default Python
