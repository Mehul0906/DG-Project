import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Java() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">C, C++, Java</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img\c_img.png" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>C, C++, Java</h2>
                            <p>DGmultimedia is a premier institute based in Surat, offering specialized courses in digital marketing and IT training to propel your career forward.</p>
                            <p>Founded by industry experts with a passion for nurturing talent and shaping successful futures.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>7 Months</span></button>
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
                            data-aos-duration="3000"><img src="./img/java.webp" alt="" /><p>Java</p></li>

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
                                    C
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
                                    Java
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Overview Of Programming With Java</p>
                                    <p><FaRegCircleCheck /> More details on Java </p>
                                    <p><FaRegCircleCheck />Simple Programs and Development environment</p>
                                    <p>  <FaRegCircleCheck />Datatypes </p>
                                    <p> <FaRegCircleCheck />Primtive Dataypes </p>
                                    <p><FaRegCircleCheck />Literals </p>
                                    <p> <FaRegCircleCheck />Variables  </p>
                                    <p> <FaRegCircleCheck /> Operators</p>
                                    <p><FaRegCircleCheck /> Control Statements</p>
                                    <p><FaRegCircleCheck /> Selection Statements </p>
                                    <p>  <FaRegCircleCheck />Blocks of code</p>
                                    <p> <FaRegCircleCheck />Iteration statements (Loops)  </p>
                                    <p><FaRegCircleCheck />Jump Statements </p>
                                    <p> <FaRegCircleCheck />Methods - Importance</p>
                                    <p> <FaRegCircleCheck />Array - Overview </p>
                                    <p><FaRegCircleCheck /> Classes</p>
                                    <p><FaRegCircleCheck />Class Inheritance</p>
                                    <p>  <FaRegCircleCheck />Methods Overiding, Overloading</p>
                                    <p> <FaRegCircleCheck />Abstract Class And Methods</p>
                                    <p><FaRegCircleCheck />Interfaces, Packages and Access Control  </p>
                                    <p> <FaRegCircleCheck />final, static and others</p>
                                    <p> <FaRegCircleCheck />Object Oriented Concepts - Revisited</p>
                                    <p><FaRegCircleCheck />Exceptions</p>
                                    <p> <FaRegCircleCheck />Multithreaded Programming</p>
                                    <p> <FaRegCircleCheck />The Java Thread Model</p>
                                    <p><FaRegCircleCheck /> Synchronization   </p>
                                    <p><FaRegCircleCheck /> Generics </p>
                                    <p><FaRegCircleCheck /> A Simple Generics Example   </p>
                                    <p><FaRegCircleCheck /> Strings  </p>
                                    <p><FaRegCircleCheck />Special String Operations</p>
                                    <p> <FaRegCircleCheck />Character Extraction</p>
                                    <p> <FaRegCircleCheck />String Comparison</p>
                                    <p><FaRegCircleCheck /> Modifying a String   </p>
                                    <p><FaRegCircleCheck /> StringBuffer </p>
                                    <p><FaRegCircleCheck />Exploring java.lang </p>
                                    <p><FaRegCircleCheck /> Primitive Type Wrappers  </p>
                                    <p> <FaRegCircleCheck />System</p>
                                    <p><FaRegCircleCheck /> Collections Framework    </p>
                                    <p><FaRegCircleCheck /> Collection Interface</p>
                                    <p><FaRegCircleCheck />Collection Classes </p>
                                    <p><FaRegCircleCheck /> Iterator  </p>
                                    <p><FaRegCircleCheck />Map Interfaces </p>
                                    <p><FaRegCircleCheck /> Map Classes </p>
                                    <p> <FaRegCircleCheck />Collection Algorithms</p>
                                    <p><FaRegCircleCheck /> Legacy Classes and Interfaces   </p>
                                    <p><FaRegCircleCheck /> More Utility Classes</p>
                                    <p><FaRegCircleCheck />	Formatter </p>
                                    <p><FaRegCircleCheck /> Scanner </p>
                                    <p><FaRegCircleCheck /> java.util Subpackages</p>
                                    <p> <FaRegCircleCheck />Input/Output: Exploring java.io</p>
                                    <p><FaRegCircleCheck /> File   </p>
                                    <p><FaRegCircleCheck /> Byte Streams</p>
                                    <p><FaRegCircleCheck />	Character Streams </p>
                                    <p><FaRegCircleCheck /> Serialization  </p>
                                    <p><FaRegCircleCheck /> Other Core Java Topics   </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <div className='course_module'>
                    <div>
                    <p><FaRegCircleDot />Basic Concept</p>
                    <p><FaRegCircleDot />Control Statement</p>
                    <p><FaRegCircleDot />Loop</p>
                    <p><FaRegCircleDot />Array</p>
                    <p><FaRegCircleDot />String</p>
                    <p><FaRegCircleDot />User Define Function</p>
                    <p><FaRegCircleDot />Dynamic Memory Allocations</p>
                    <p><FaRegCircleDot />File Management</p>
                    <p><FaRegCircleDot />Functions</p>
                    <p><FaRegCircleDot />Graphics & Animation</p>
                    



                    <p><FaRegCircleDot />Concept Of OOP</p>
                    <p><FaRegCircleDot />Storage Classes</p>
                    <p><FaRegCircleDot />Inheritance</p>
                    <p><FaRegCircleDot />Polymorphism</p>
                    <p><FaRegCircleDot />String</p>
                    <p><FaRegCircleDot />Interfaces</p>
                    <p><FaRegCircleDot />Exception Handling</p>
                    <p><FaRegCircleDot />Java Basics</p>
                    <p><FaRegCircleDot />Control Statements</p>
                    <p><FaRegCircleDot />Java OOPs Concepts</p>


                    <p><FaRegCircleDot />Java Polymorphism</p>
                    <p><FaRegCircleDot />Exception Handling</p>
                    <p><FaRegCircleDot />Multithreading In Java</p>
                    <p><FaRegCircleDot />Java I/O</p>
                    <p><FaRegCircleDot />Java AWT</p>
                    <p><FaRegCircleDot />Java Swing</p>
                    <p><FaRegCircleDot />Java Applet</p>
                    <p><FaRegCircleDot />Java Database</p>
                    </div>
                  </div> */}

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Java
