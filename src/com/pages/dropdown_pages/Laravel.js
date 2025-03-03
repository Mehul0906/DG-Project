import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Laravel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Laravel</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

              <img src="./img/laravel.png" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
              <h2>Laravel</h2>
              <p> Laravel is an open-source undertaking to make sites with simple advancement methods. Laravel pursues the exquisite, expressive linguistic structure. Laravel makes the advancement system a satisfying one for the engineers without giving up applications' usefulness.</p>
              <p>Laravel PHP Framework accreditation course will familiarize members with available apparatuses required for hearty, enormous applications.</p>
              <div className='course_button'>
                <button>Course Duration <span>4 Months</span></button>
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

                  Introduction Of Laravel PHP Framework
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Installing Laravel</p>

                  <p><FaRegCircleCheck /> Artisan CLI ( command-line interface )</p>

                  <p>  <FaRegCircleCheck /> Laravel Directory Structure</p>

                  <p> <FaRegCircleCheck /> Configuring a new Laravel project </p>

                  <p><FaRegCircleCheck />Artisan command to generate boilerplate code  </p>


                </div>
              </div>

            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Controller

                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Basic routing</p>

                  <p><FaRegCircleCheck /> Call a controller method from a route </p>

                  <p>  <FaRegCircleCheck />Passing variables from controllers to views </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Laravel Blade Template With Html Template

                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Template inheritance</p>

                  <p><FaRegCircleCheck />Master layout</p>

                  <p>  <FaRegCircleCheck />Extending the master layout</p>

                  <p> <FaRegCircleCheck />Displaying variables </p>

                  <p><FaRegCircleCheck />Blade conditional statements</p>

                  <p> <FaRegCircleCheck />Blade Loops</p>

                  <p> <FaRegCircleCheck />Executing PHP functions in blade </p>

                  <p><FaRegCircleCheck />Displaying Your Views</p>

                  <p><FaRegCircleCheck /> Creating and using a basic views  </p>
                  <p> <FaRegCircleCheck />Loading a view into another view/nested views </p>

                  <p><FaRegCircleCheck />Adding assets</p>

                  <p><FaRegCircleCheck /> Integrating with Bootstrap  </p>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                  Laravel Migrations
                </button>
              </h2>
              <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction </p>

                  <p><FaRegCircleCheck /> Requirements for running migrations </p>
                  <p><FaRegCircleCheck />Artisan migration command</p>

                  <p>  <FaRegCircleCheck />Migration structure</p>

                  <p> <FaRegCircleCheck />How to create a table using a migration </p>

                  <p><FaRegCircleCheck />Laravel migration rollback  </p>

                  <p> <FaRegCircleCheck />Database Seeding  </p>

                  <p> <FaRegCircleCheck /> Migrations for our project database </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                  Using Forms And Gathering Input
                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Adding HTML 5 Package </p>

                  <p><FaRegCircleCheck /> Creating A form using Blade Syntax </p>

                  <p>  <FaRegCircleCheck />Validating user input</p>

                  <p> <FaRegCircleCheck />File Uploading</p>

                  <p><FaRegCircleCheck />Error message Handling  </p>

                  <p> <FaRegCircleCheck />Encrypting and decrypting data  </p>

                  <p> <FaRegCircleCheck /> Preserving the data</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                  Laravel Controllers And Routes For URL
                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction </p>

                  <p><FaRegCircleCheck /> Creating a basic controller </p>

                  <p>  <FaRegCircleCheck />Creating a route using a closure </p>

                  <p> <FaRegCircleCheck />Making the controller As a routing </p>

                  <p><FaRegCircleCheck />Using route groups  </p>

                  <p> <FaRegCircleCheck />Using route resource </p>


                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  Laravel Admin Panel Setup
                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction </p>

                  <p><FaRegCircleCheck />Setup Admin Panel using Bootstrap theme</p>
                  <p><FaRegCircleCheck />Create Admin login</p>
                  <p> <FaRegCircleCheck />Creating an admin authentication system</p>

                  <p><FaRegCircleCheck /> Encrypting and decrypting data</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                  Eloquent ORM ( Storing And Using Data )
                </button>
              </h2>
              <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Eloquent ORM Models</p>

                  <p><FaRegCircleCheck /> Naming conventions   </p>
                  <p> <FaRegCircleCheck />Table name and primary keys</p>

                  <p><FaRegCircleCheck /> Timestamps</p>

                  <p><FaRegCircleCheck />Eloquent ORM INSERT, READ, UPDATE, DELETE </p>
                  <p><FaRegCircleCheck /> Using models in controllers</p>

                  <p><FaRegCircleCheck />Displaying data from models in views</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                  Creating And Using Composer Packages
                </button>
              </h2>
              <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction</p>
                  <p> <FaRegCircleCheck />Downloading and installing packages</p>
                  <p> <FaRegCircleCheck />Using a basic Shopping Cart package in our project</p>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">

                  Laravel Security & Session
                </button>
              </h2>
              <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Using Security</p>
                  <p> <FaRegCircleCheck />Sessions Effective</p>

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

export default Laravel
