import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Php() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Php</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">

              <img src="./img/php.jpg" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
              <h2>Php</h2>
              <p>PHP is an acronym for Hypertext Pre-processor</p>
              <p>Each business is developing with the assistance of sites.</p>
              <p>To advance business online is significant and for that site, it assumes an essential job.</p>
              <p>DG Multimedia Institute give you the training to manufacture your profession as a PHP Developer.</p>
              <div className='course_button'>
                <button>Course Duration <span>5 Months</span></button>
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
                  Introduction Of Web & PHP
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> What is PHP?</p>

                  <p><FaRegCircleCheck />The history of PHP</p>

                  <p>  <FaRegCircleCheck />Why choose PHP?</p>

                  <p> <FaRegCircleCheck />Installation overview</p>

                </div>
              </div>

            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  First Steps
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Embedding PHP code on a page</p>

                  <p><FaRegCircleCheck />Outputting dynamic text</p>

                  <p>  <FaRegCircleCheck />The operational trail </p>

                  <p> <FaRegCircleCheck />Inserting code comments</p>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Exploring Data Types

                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> Variables</p>

                  <p><FaRegCircleCheck />Strings</p>

                  <p>  <FaRegCircleCheck />String functions</p>

                  <p> <FaRegCircleCheck />Numbers part one: Integers</p>
                  <p> <FaRegCircleCheck />Numbers part two:Floating points</p>

                  <p><FaRegCircleCheck />Arrays</p>

                  <p>  <FaRegCircleCheck />Associative arrays</p>

                  <p> <FaRegCircleCheck />Array functions </p>
                  <p> <FaRegCircleCheck />Booleans</p>
                  <p>  <FaRegCircleCheck />NULL and empty</p>

                  <p> <FaRegCircleCheck />Type juggling and casting</p>
                  <p> <FaRegCircleCheck />Constants</p>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                  Control Structures: Logical Expressions
                </button>
              </h2>
              <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />If statements</p>
                  <p><FaRegCircleCheck />Else and elseif statements</p>
                  <p><FaRegCircleCheck />Logical Operators</p>
                  <p> <FaRegCircleCheck />Switch statements</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                  Control Structures: Loops

                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />While loops</p>
                  <p><FaRegCircleCheck /> For loops </p>
                  <p>  <FaRegCircleCheck />ForEach loops </p>
                  <p>  <FaRegCircleCheck />Continue</p>
                  <p>  <FaRegCircleCheck />Break</p>
                  <p>  <FaRegCircleCheck />Understanding array pointer  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                  User-Defined Functions

                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Defining functions</p>
                  <p> <FaRegCircleCheck />Function arguments</p>
                  <p> <FaRegCircleCheck />Returning values from a function</p>
                  <p> <FaRegCircleCheck />Multiple return values</p>
                  <p> <FaRegCircleCheck />Scope and global variables</p>
                  <p> <FaRegCircleCheck />Setting default argument values</p>
                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  Debugging

                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Common problems</p>

                  <p><FaRegCircleCheck />Warnings and errors</p>
                  <p><FaRegCircleCheck />Debugging and troubleshooting</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                  Building Web Pages With PHP

                </button>
              </h2>
              <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Links and URLs</p>

                  <p><FaRegCircleCheck /> Using GET values   </p>
                  <p> <FaRegCircleCheck />Encoding GET values</p>

                  <p><FaRegCircleCheck /> Encoding for HTML  </p>

                  <p><FaRegCircleCheck />Including and requiring files  </p>
                  <p> <FaRegCircleCheck />Modifying headers</p>

                  <p><FaRegCircleCheck /> Page redirection  </p>

                  <p><FaRegCircleCheck />Output buffering</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                  Working With Forms And Form Data
                </button>
              </h2>
              <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Building forms</p>
                  <p> <FaRegCircleCheck />Detecting form submissions</p>
                  <p> <FaRegCircleCheck />Single-page form processing</p>
                  <p> <FaRegCircleCheck />Validating form values</p>
                  <p> <FaRegCircleCheck />Problems with validation logic</p>
                  <p> <FaRegCircleCheck />Displaying validation errors</p>
                  <p> <FaRegCircleCheck />Custom validation functions</p>
                  <p> <FaRegCircleCheck />Single-page form with validations</p>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                  Working With Cookies And Sessions

                </button>
              </h2>
              <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Working with cookies</p>
                  <p> <FaRegCircleCheck />Setting cookie values</p>
                  <p> <FaRegCircleCheck />Reading cookie values</p>
                  <p> <FaRegCircleCheck />Unsetting cookie values</p>
                  <p> <FaRegCircleCheck />Working with sessions</p>
                </div>
              </div>
            </div>




            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                  MySQL Basics
                </button>
              </h2>
              <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />MySQL introduction</p>
                  <p> <FaRegCircleCheck />Creating a database</p>
                  <p> <FaRegCircleCheck />Creating a database table</p>
                  <p> <FaRegCircleCheck />CRUD in MySQL</p>
                  <p> <FaRegCircleCheck />Populating a MySQL database</p>
                  <p> <FaRegCircleCheck />Relational database tables</p>
                  <p> <FaRegCircleCheck />Populating the relational table</p>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                  Using PHP To Access MySQL
                </button>
              </h2>
              <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Database APIs in PHP</p>
                  <p> <FaRegCircleCheck />Connecting to MySQL with PHP</p>
                  <p> <FaRegCircleCheck />Retrieving data from MySQL</p>
                  <p> <FaRegCircleCheck />Working with retrieved data</p>
                  <p> <FaRegCircleCheck />Creating records with PHPUpdating and deleting records with PHP</p>
                  <p> <FaRegCircleCheck />SQL injection</p>
                  <p> <FaRegCircleCheck />Escaping strings for MySQL</p>
                  <p> <FaRegCircleCheck />Introducing prepared statements</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
                  Advanced PHP Techniques
                </button>
              </h2>
              <div id="collapsethirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introducing the concept and basics of OOP</p>
                  <p> <FaRegCircleCheck />Defining classes </p>
                  <p> <FaRegCircleCheck />Defining class methods</p>
                  <p> <FaRegCircleCheck />Instantiating a class</p>
                  <p> <FaRegCircleCheck />Referencing an instance</p>
                  <p> <FaRegCircleCheck />Defining class properties</p>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourteen" aria-expanded="false" aria-controls="collapsefourteen">
                  OOP In Practice
                </button>
              </h2>
              <div id="collapsefourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Understanding class inheritance</p>
                  <p> <FaRegCircleCheck />Setting access modifierss</p>
                  <p> <FaRegCircleCheck />Using setters and getters Working with the static modifier</p>
                  <p> <FaRegCircleCheck />Reviewing the scope resolution operator</p>
                  <p> <FaRegCircleCheck />Referencing the Parent class </p>
                  <p> <FaRegCircleCheck />Using constructors and destructors</p>
                  <p> <FaRegCircleCheck />Cloning objects</p>
                  <p> <FaRegCircleCheck />Comparing objects</p>
                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">
                  Working With Files And Directories
                </button>
              </h2>
              <div id="collapsefifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />File system basics</p>
                  <p> <FaRegCircleCheck />Understanding file permissions</p>
                  <p> <FaRegCircleCheck />Setting file permissions</p>
                  <p> <FaRegCircleCheck />PHP permissions</p>
                  <p> <FaRegCircleCheck />Accessing files</p>
                  <p> <FaRegCircleCheck />Writing to files </p>
                  <p> <FaRegCircleCheck />Deleting files</p>
                  <p> <FaRegCircleCheck />Moving the file pointer</p>
                  <p> <FaRegCircleCheck />Reading files</p>
                  <p> <FaRegCircleCheck />Examining file details</p>
                  <p> <FaRegCircleCheck />Working with directories</p>
                  <p> <FaRegCircleCheck />Viewing directory content </p>

                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesixteen" aria-expanded="false" aria-controls="collapsesixteen">
                  Sending Emails
                </button>
              </h2>
              <div id="collapsesixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Configuring PHP for email</p>
                  <p> <FaRegCircleCheck />Sending email with mail()</p>
                  <p> <FaRegCircleCheck />Using headers</p>
                  <p> <FaRegCircleCheck />Reviewing SMTP </p>
                  <p> <FaRegCircleCheck />Using PHPMailer</p>
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

export default Php
