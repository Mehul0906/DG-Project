import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Angular() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Angular Js</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">

              <img src="./img/angular_js.png" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
              <h2>Angular Js</h2>
              <p>AngularJS is one of the most dominant and mainstream open-source Javascript structure right now accessible in the market. AngularJS is as of now kept up and checked by Google and the open-source AngularJS people group.</p>
              {/* <p>Founded by industry experts with a passion for nurturing talent and shaping successful futures.</p> */}
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
                  Pre-Learning Programming Concepts

                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> HTML5</p>

                  <p><FaRegCircleCheck />CSS3</p>

                  <p>  <FaRegCircleCheck />Boostrap5</p>

                  <p> <FaRegCircleCheck />Javascript </p>

                  <p><FaRegCircleCheck />Jquery </p>

                  <p> <FaRegCircleCheck />Typescript </p>


                </div>
              </div>

            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Introduction To Angular
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction to Angular</p>

                  <p><FaRegCircleCheck />Angular Technology Stack</p>

                  <p>  <FaRegCircleCheck />Advantages of Angular </p>

                  <p> <FaRegCircleCheck />Angular Library components </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                  Angular Js Fundamentals
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> Angular JS download and cdn file</p>

                  <p><FaRegCircleCheck />Angular JS important topicsAngular JS Expression to print records </p>

                  <p>  <FaRegCircleCheck />Angular JS Expression with ng-init directive </p>

                  <p> <FaRegCircleCheck />Angular Js ng-app directive to initialize angular functionality </p>
                  <p> <FaRegCircleCheck /> Angular Js ng-init</p>

                  <p><FaRegCircleCheck />directive with arrays</p>

                  <p>  <FaRegCircleCheck />Angular Js ng-init directive with custom objects </p>

                  <p> <FaRegCircleCheck />Angular Js ng-init directive with variables , strings & boolean values </p>




                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">

                  Angular Components
                </button>
              </h2>
              <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is a Component?</p>
                  <p><FaRegCircleCheck />How to Create a new Component? </p>
                  <p><FaRegCircleCheck />Creating Component with CLI and nesting Component [Templates and Styles]</p>
                  <p> <FaRegCircleCheck />Angular CLI</p>
                  <p><FaRegCircleCheck />Nested Components </p>
                  <p><FaRegCircleCheck />Deeper Nesting</p>
                  <p><FaRegCircleCheck />Angular Components Lifecycle </p>
                  <p><FaRegCircleCheck />Understanding the Component Selector.</p>



                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">

                  Angular Event Bindings
                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> Template ModelData Binding </p>
                  <p><FaRegCircleCheck /> Built-in Directives </p>
                  <p>  <FaRegCircleCheck />Basics of Webpack and SystemJS </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">

                  Angular Service And Dependency Injection
                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Dependency Injection </p>
                  <p> <FaRegCircleCheck />Dependency Injection API </p>
                  <p> <FaRegCircleCheck />The coding pattern for dependencies </p>
                  <p> <FaRegCircleCheck />Service Overview</p>
                  <p> <FaRegCircleCheck />Creating a Service </p>
                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  Angular Work In Directives
                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Power of directives </p>

                  <p><FaRegCircleCheck /> Working with built in directives</p>
                  <p><FaRegCircleCheck />ng-app, ng-init</p>
                  <p> <FaRegCircleCheck />ng-model, ng-repeat </p>

                  <p><FaRegCircleCheck /> ng-class, ng-template</p>
                  <p><FaRegCircleCheck />ng-include</p>
                  <p><FaRegCircleCheck />Working with custom directives</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                  Angular Pipes
                </button>
              </h2>
              <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What are pipes</p>

                  <p><FaRegCircleCheck /> Create Custom Pipe   </p>





                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                  Angular Forms
                </button>
              </h2>
              <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Angular form benefits</p>
                  <p> <FaRegCircleCheck />Template-driven approach</p>
                  <p> <FaRegCircleCheck />Angular Validation</p>
                  <p> <FaRegCircleCheck />Model-driven approach</p>
                  <p> <FaRegCircleCheck />Reactive Forms</p>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                  Angular Routing
                </button>
              </h2>
              <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />NgModule</p>
                  <p> <FaRegCircleCheck />Router Basics</p>
                  <p> <FaRegCircleCheck />Parameter Routing</p>
                  <p> <FaRegCircleCheck />Child Router</p>
                  <p> <FaRegCircleCheck />Router Lifecycle Hooks</p>

                </div>
              </div>
            </div>




            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                  HTTP Promises And Observables
                </button>
              </h2>
              <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Working with RxJS</p>
                  <p> <FaRegCircleCheck />Angular Interaction with HTTP</p>
                  <p> <FaRegCircleCheck />HTTP Post </p>
                  <p> <FaRegCircleCheck />Difference between Observables Vs Promises</p>

                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                  Angular Single Page Applications
                </button>
              </h2>
              <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is SPA?</p>
                  <p> <FaRegCircleCheck />How to work with SPA in angular</p>
                  <p> <FaRegCircleCheck />Working with routes Static & dynamic routing</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
                  REST API Calls
                </button>
              </h2>
              <div id="collapsethirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Overview of REST API</p>
                  <p> <FaRegCircleCheck />Use of angular resource module  </p>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourteen" aria-expanded="false" aria-controls="collapsefourteen">

                  Animations
                </button>
              </h2>
              <div id="collapsefourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Overview of transitions</p>
                  <p> <FaRegCircleCheck />Use of angular animate module</p>

                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">

                  Angular With UI Frameworks
                </button>
              </h2>
              <div id="collapsefifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />ui boostrap</p>
                  <p> <FaRegCircleCheck />Angular-meterial</p>

                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesixteen" aria-expanded="false" aria-controls="collapsesixteen">

                  Behavior Driven Development

                </button>
              </h2>
              <div id="collapsesixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Overview of Nodejs</p>
                  <p> <FaRegCircleCheck />installation of karma and jasmin</p>
                  <p> <FaRegCircleCheck />working with karma and jasmin</p>

                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseventeen" aria-expanded="false" aria-controls="collapseseventeen">

                  Testing
                </button>
              </h2>
              <div id="collapseseventeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Tools and setup</p>
                  <p> <FaRegCircleCheck />testing Angular Class</p>
                  <p> <FaRegCircleCheck />Angular Unit Testing with TestBEd</p>
                  <p> <FaRegCircleCheck />Testing Service</p>
                  <p> <FaRegCircleCheck />Testing DOM</p>

                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeighteen" aria-expanded="false" aria-controls="collapseeighteen">
                  Projects Task
                </button>
              </h2>
              <div id="collapseeighteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Working on Projects, Define ideas</p>
                  <p> <FaRegCircleCheck />Start working, Explore Troubleshooting methods</p>
                  <p> <FaRegCircleCheck />Get help from Google to find right Solutions</p>
                  <p> <FaRegCircleCheck />Complete project on timeline, make plannings</p>
                  <p> <FaRegCircleCheck />Work on live project work and get hired</p>

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

export default Angular
