import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function React_Native() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">React Native</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">

              <img src="./img/react_native.png" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
              <h2>React Native</h2>
              <p>React has become one of the most popular and efficient JavaScript front end libraries Developed by Facebook.</p>
              <p>React helps in developing apps with more ease, scalability, and robustness.</p>
              <p>There is plenty of demand for ReactNative experts and developers.</p>
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
                  ECMA SCRIPT ES6 Primer
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> History of Javascript</p>

                  <p><FaRegCircleCheck />What is ES6</p>

                  <p>  <FaRegCircleCheck /> A word on bable</p>

                  <p> <FaRegCircleCheck />Block scope, let & const </p>

                  <p><FaRegCircleCheck />Template literals </p>

                  <p> <FaRegCircleCheck />Arrow functions </p>

                  <p> <FaRegCircleCheck /> Spread and Rest operators </p>

                  <p><FaRegCircleCheck /> Object literal improvements</p>

                  <p> <FaRegCircleCheck /> Destructuring</p>

                  <p><FaRegCircleCheck />Classes</p>

                  <p>  <FaRegCircleCheck /> Inheritance</p>

                  <p> <FaRegCircleCheck />Static properties and methods</p>

                  <p><FaRegCircleCheck />Promises </p>

                  <p> <FaRegCircleCheck />Iterators and Iterables</p>

                  <p> <FaRegCircleCheck /> Generators </p>

                  <p><FaRegCircleCheck /> Modules</p>
                  <p><FaRegCircleCheck /> Set and Map</p>

                </div>
              </div>

            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Introduction To React Native
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is React Native?</p>

                  <p><FaRegCircleCheck /> Why React Native? </p>

                  <p>  <FaRegCircleCheck />React version history </p>

                  <p> <FaRegCircleCheck />React 16 vs React 15 </p>

                  <p><FaRegCircleCheck />Just React – Hello World </p>

                  <p> <FaRegCircleCheck />Using create-react-app</p>

                  <p> <FaRegCircleCheck /> Anatomy of react project </p>

                  <p><FaRegCircleCheck /> Running the app</p>
                  <p><FaRegCircleCheck /> Debugging first react app</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  React Templating Using JSX
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> create Element Expressions</p>
                  <p> <FaRegCircleCheck />Using logical operators</p>

                  <p><FaRegCircleCheck /> Specifying attributes </p>

                  <p>  <FaRegCircleCheck />Specifying children </p>




                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                  React Component
                </button>
              </h2>
              <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Significance of component architecture </p>

                  <p><FaRegCircleCheck /> Types of components(Functional,Class based,Pure) </p>
                  <p><FaRegCircleCheck />Component Composition</p>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                  Working With The State And Props
                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is state and it significance</p>

                  <p><FaRegCircleCheck /> Read state and set state </p>

                  <p>  <FaRegCircleCheck />Passing data to component using props </p>

                  <p> <FaRegCircleCheck />Validating props using prop Types</p>

                  <p><FaRegCircleCheck />Supplying default values to props using default Props  </p>




                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                  React Component Lifecycle
                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Understanding component lifecycle</p>


                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  Core React Native Components
                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Establishing a layout with View </p>

                  <p><FaRegCircleCheck /> Displaying text with Text</p>
                  <p><FaRegCircleCheck />Accepting user input with TextInput</p>

                  <p> <FaRegCircleCheck />Adding images with Image</p>

                  <p><FaRegCircleCheck /> Making components interactive with TouchableHighlight</p>
                  <p><FaRegCircleCheck />Displaying data with ListView</p>

                  <p><FaRegCircleCheck /> Changing screens with Navigator</p>
                  <p><FaRegCircleCheck />Expanding touch capability with GestureResponder and PanResponder</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                  Styling - React Native
                </button>
              </h2>
              <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Issues with CSS</p>

                  <p><FaRegCircleCheck /> Inline Styles </p>

                  <p>  <FaRegCircleCheck />Create Immutable style objects with Stylesheet</p>

                  <p> <FaRegCircleCheck />Pass styles as props</p>

                  <p><FaRegCircleCheck />Positioning components with flexbox </p>




                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">

                  React Native APIs
                </button>
              </h2>
              <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Using fetch to retrieve data</p>
                  <p> <FaRegCircleCheck />Getting a user’s location and handling permissions</p>
                  <p> <FaRegCircleCheck />Accessing stored photos with CameraRoll</p>
                  <p> <FaRegCircleCheck />Adding animations </p>


                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                  Authentication With Firebase
                </button>
              </h2>
              <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />A Common Root Component</p>
                  <p> <FaRegCircleCheck />Copying Reusable Components</p>
                  <p> <FaRegCircleCheck />What is Firebase?</p>
                  <p> <FaRegCircleCheck />Firebase Client Setup </p>

                  <p> <FaRegCircleCheck />Login Form Scaffolding</p>
                  <p> <FaRegCircleCheck />Handling User Inputs</p>
                  <p> <FaRegCircleCheck />More on Handling User Inputs</p>
                  <p> <FaRegCircleCheck />How to Create Controlled Components </p>

                  <p> <FaRegCircleCheck />Making Text Inputs From Scratch</p>
                  <p> <FaRegCircleCheck />A Focus on Passing Props</p>
                  <p> <FaRegCircleCheck />Making the Input Pretty</p>
                  <p> <FaRegCircleCheck />Wrapping up Inputs</p>
                  <p> <FaRegCircleCheck />Password Inputs</p>


                </div>
              </div>
            </div>




            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                  Processing Authentication Credentials
                </button>
              </h2>
              <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Logging a User In</p>
                  <p> <FaRegCircleCheck />Error Handling</p>
                  <p> <FaRegCircleCheck />More on Authentication Flow</p>
                  <p> <FaRegCircleCheck />Creating an Activity Spinner</p>

                  <p> <FaRegCircleCheck />Conditional Rendering of JSX</p>
                  <p> <FaRegCircleCheck />Clearing the Form Spinner</p>
                  <p> <FaRegCircleCheck />Handling Authentication Events</p>
                  <p> <FaRegCircleCheck />More on Conditional Rendering </p>

                  <p> <FaRegCircleCheck />Logging a User Out and Wrapup</p>



                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                  Application Deployment
                </button>
              </h2>
              <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Deploying to Apple App Store</p>
                  <p> <FaRegCircleCheck />Deploying to Android Play Store</p>



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

export default React_Native
