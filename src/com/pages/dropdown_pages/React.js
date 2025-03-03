import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
function React_js() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">React Js</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">

              <img src="./img/react.jpg" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
              <h2>React Js</h2>
              <p>React has become one of the most popular and efficient JavaScript front end libraries Developed by Facebook.</p>
              <p>React helps in developing apps with more ease, scalability, and robustness.</p>
              <p>There is plenty of demand for ReactJS experts and developers.</p>
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
                  Introduction To React
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is React?</p>

                  <p><FaRegCircleCheck /> Why React? </p>

                  <p>  <FaRegCircleCheck />React version history </p>

                  <p> <FaRegCircleCheck />React 16 vs React 15  </p>

                  <p><FaRegCircleCheck />Just React – Hello World  </p>

                  <p> <FaRegCircleCheck />Using create-react-app  </p>

                  <p> <FaRegCircleCheck /> Anatomy of react project</p>

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

                  <p><FaRegCircleCheck /> Using logical operators </p>

                  <p>  <FaRegCircleCheck />Specifying attributes </p>

                  <p> <FaRegCircleCheck />Specifying children </p>




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
                  <p> <FaRegCircleCheck />Significance of component architecture</p>

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
                  <p> <FaRegCircleCheck />What is state and it significance </p>

                  <p><FaRegCircleCheck /> Read state and set state </p>

                  <p>  <FaRegCircleCheck />Passing data to component using props </p>

                  <p> <FaRegCircleCheck />Validating props using prop  Types</p>

                  <p><FaRegCircleCheck />Supplying default values to props using default Props </p>


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
                  <p> <FaRegCircleCheck />Understanding component lifecycle </p>
                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  React Hive In Talend For Big Data
                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Understanding React event system </p>

                  <p><FaRegCircleCheck /> Understanding Synthetic event</p>
                  <p><FaRegCircleCheck />Passing arguments to event handles</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">

                  Rendering List
                </button>
              </h2>
              <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Using react to key prop</p>

                  <p><FaRegCircleCheck /> Using map function to iterate on arrays to generate elements </p>





                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">

                  Working With Forms
                </button>
              </h2>
              <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Controlled components</p>
                  <p> <FaRegCircleCheck />Uncontrolled components</p>
                  <p> <FaRegCircleCheck />Understand the significance to defaultValue prop</p>
                  <p> <FaRegCircleCheck />Using react ref prop to get access to DOM element </p>


                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">

                  React Portals,Error Boundaries,Fiber Architecture
                </button>
              </h2>
              <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> Understand react portals</p>
                  <p> <FaRegCircleCheck />Under error boundaries</p>
                  <p> <FaRegCircleCheck />React’s new fiber architecture</p>


                </div>
              </div>
            </div>




            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                  Routing With React Router
                </button>
              </h2>
              <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Setting up react router</p>
                  <p> <FaRegCircleCheck />Understand routing in single page applications</p>
                  <p> <FaRegCircleCheck />Working with BrowserRouter and HashRouter components</p>
                  <p> <FaRegCircleCheck />Configuring route with Route component</p>

                  <p> <FaRegCircleCheck />Using Switch component to define routing rules</p>
                  <p> <FaRegCircleCheck />Making routes dynamic using route params</p>
                  <p> <FaRegCircleCheck />Working with nested routes</p>
                  <p> <FaRegCircleCheck />Navigating to pages using Link and NavLink component </p>

                  <p> <FaRegCircleCheck />Redirect routes using Redirect Component</p>
                  <p> <FaRegCircleCheck />Using Prompt component to get consent of user for navigation </p>

                  <p> <FaRegCircleCheck />Path less Route to handle failed matches</p>




                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                  Redux
                </button>
              </h2>
              <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is redux</p>
                  <p> <FaRegCircleCheck />Why redux</p>
                  <p> <FaRegCircleCheck />Redux principles</p>
                  <p> <FaRegCircleCheck />Install and setup redux</p>
                  <p> <FaRegCircleCheck />Creating actions, reducer and store</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
                  React Redux
                </button>
              </h2>
              <div id="collapsethirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is React Redux</p>
                  <p> <FaRegCircleCheck />Why React Redux</p>
                  <p> <FaRegCircleCheck />Install and setup</p>
                  <p> <FaRegCircleCheck />Presentational vs Container components</p>
                  <p> <FaRegCircleCheck />Understand high order component</p>
                  <p> <FaRegCircleCheck />Understanding mapStateToProps and mapDispatchtToProps usage</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourteen" aria-expanded="false" aria-controls="collapsefourteen">

                  Server-Side Rendering With React
                </button>
              </h2>
              <div id="collapsefourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is server-side rendering (SSR)?</p>
                  <p> <FaRegCircleCheck />Why SSR</p>
                  <p> <FaRegCircleCheck />Working with renderToString and renderToStaticMarkup methods </p>

                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">

                  Unit Testing In React

                </button>
              </h2>
              <div id="collapsefifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Understand the significance of unit testing</p>
                  <p> <FaRegCircleCheck />Understand unit testing jargon and tools</p>
                  <p> <FaRegCircleCheck />Unit testing react components with Jest</p>
                  <p> <FaRegCircleCheck />Unit testing react components with enzyme</p>
                  <p> <FaRegCircleCheck />Using sinon to mock</p>
                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesixteen" aria-expanded="false" aria-controls="collapsesixteen">

                  Webpack Primer

                </button>
              </h2>
              <div id="collapsesixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is webpack</p>
                  <p> <FaRegCircleCheck />Why webpack</p>
                  <p> <FaRegCircleCheck />Install and setup webpack</p>
                  <p> <FaRegCircleCheck />Working with webpack configuration file</p>
                  <p> <FaRegCircleCheck />Working with loaders</p>
                  <p> <FaRegCircleCheck />Quick word on code splitting, lazy loading,tree shaking</p>
                  <p> <FaRegCircleCheck />Setting up Hot Module Replacement</p>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseventeen" aria-expanded="false" aria-controls="collapseseventeen">

                  Projects Task
                </button>
              </h2>
              <div id="collapseseventeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Working on Projects, Define ideas</p>
                  <p> <FaRegCircleCheck />Start working, Explore Troubleshooting methods</p>
                  <p> <FaRegCircleCheck />Get help from Google to find right Solutions</p>
                  <p> <FaRegCircleCheck />Complete project on timeline, make plannings  </p>
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

export default React_js
