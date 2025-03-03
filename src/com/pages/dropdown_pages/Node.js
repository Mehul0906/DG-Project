import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Node() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Node Js</h1>
        </div>
      </div>
      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
              data-aos-duration="3000">

              <img src="./img/Node-Js.svg" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
              data-aos-duration="3000">
              <h2>Node Js</h2>
              <p>Node.js is the future of real-time web applications.</p>
              <p>NodeJS allows two-way communication between the client and the server.</p>
              <p>NodeJS training in Surat to learn how to build an application.</p>
              <p>NodeJS runs on JavaScript and is lightweight, flexible, scalable, and easily maintainable.</p>
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
                  Javascript
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> History of JS</p>

                  <p><FaRegCircleCheck />Syntax of Js</p>

                  <p>  <FaRegCircleCheck /> Variables & Data Types & Operators</p>

                  <p> <FaRegCircleCheck />Use of var,let,const </p>

                  <p><FaRegCircleCheck />Progrming Concept (if,loop,Switch,array,String,etc...) </p>

                  <p> <FaRegCircleCheck />Use Of Class,Functions & Objects </p>

                  <p> <FaRegCircleCheck /> Use Of Selectors(ld,Tagname,ClassName,etc...) </p>

                  <p><FaRegCircleCheck /> Events & Methods </p>

                  <p> <FaRegCircleCheck /> Built in Functions(Date,Math,Array,String,etc...)</p>

                  <p><FaRegCircleCheck />Manipulating the DOM</p>

                  <p>  <FaRegCircleCheck /> Handling events + Making a mini game</p>



                </div>
              </div>

            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ECMAScript
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction of ES5</p>

                  <p><FaRegCircleCheck /> Working with ES5 Features </p>

                  <p>  <FaRegCircleCheck />Getters and Setters Method </p>

                  <p> <FaRegCircleCheck />Introduction of ES6</p>

                  <p><FaRegCircleCheck />Use of Arrow Functions </p>

                  <p> <FaRegCircleCheck />Use of Destructuring</p>

                  <p> <FaRegCircleCheck /> Use of  Template String </p>

                  <p><FaRegCircleCheck />Work With Default Argument & Object Properties</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Basic Concept Of Node Js
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck /> Introduction</p>
                  <p> <FaRegCircleCheck />What is Node.js</p>
                  <p><FaRegCircleCheck /> How js different (javascript vs node) </p>
                  <p>  <FaRegCircleCheck />Feature of Node.js </p>
                  <p><FaRegCircleCheck /> js Installation & configuration </p>
                  <p>  <FaRegCircleCheck />Where to use Node ? </p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                  Setup Environment Of Node
                </button>
              </h2>
              <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Downloading and installing NodeJS</p>

                  <p><FaRegCircleCheck /> Create a simple node application </p>
                  <p><FaRegCircleCheck />Create a Terminal</p>

                  <p> <FaRegCircleCheck />Creating a package for managing your application</p>

                  <p><FaRegCircleCheck /> Overview of Node Package Manager </p>
                  <p><FaRegCircleCheck />Installing npm locally</p>
                  <p><FaRegCircleCheck />npm Global Installation</p>

                  <p> <FaRegCircleCheck />json</p>

                  <p><FaRegCircleCheck /> Updating a module </p>
                  <p><FaRegCircleCheck />Deleting a Module</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                  Event Loop
                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is Event Loop?</p>

                  <p><FaRegCircleCheck /> Event Driven Programming </p>

                  <p>  <FaRegCircleCheck />Event Emitter</p>

                  <p> <FaRegCircleCheck />Call back function</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">

                  Utility Module

                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is a module</p>
                  <p> <FaRegCircleCheck />Require and module exports</p>
                  <p> <FaRegCircleCheck />Use Of core modules</p>
                  <p> <FaRegCircleCheck />Create Your Own Module</p>
                </div>
              </div>
            </div>



            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  Web Module
                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is web-server ?</p>

                  <p><FaRegCircleCheck />Web application architecture</p>
                  <p><FaRegCircleCheck />Creating web-server using Node</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                  File System
                </button>
              </h2>
              <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Node apps and managing a file system</p>

                  <p><FaRegCircleCheck /> Creating and deleting files and directories </p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                  HTTP And HTTPs
                </button>
              </h2>
              <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Making a simple server</p>
                  <p> <FaRegCircleCheck />When to use HTTP and HTTPs</p>
                  <p> <FaRegCircleCheck />HTTP requests and responses</p>
                  <p> <FaRegCircleCheck />Request and response headers and body </p>
                  <p> <FaRegCircleCheck />Building a simple HTTP server with static files </p>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                  Express Framework
                </button>
              </h2>
              <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />What is framework ?</p>
                  <p> <FaRegCircleCheck />Installing Express.js</p>
                  <p> <FaRegCircleCheck />Install Folder Structure</p>
                  <p> <FaRegCircleCheck />Install Dependency</p>

                  <p> <FaRegCircleCheck />Working Express Framework with  Node js</p>
                  <p> <FaRegCircleCheck />Node Js Embed With HTML Pages</p>
                  <p> <FaRegCircleCheck />Node Js Embed With JSON data</p>
                  <p> <FaRegCircleCheck />Node Js Routing</p>

                  <p> <FaRegCircleCheck />Node Js Package Manager (npm)</p>
                  <p> <FaRegCircleCheck />Node Js package.json file</p>
                  <p> <FaRegCircleCheck />Node Js with Nodemon package</p>
                  <p> <FaRegCircleCheck />Node Js With Express Routes</p>
                  <p> <FaRegCircleCheck />Node Js With Ejs Template Engine</p>

                  <p> <FaRegCircleCheck />Node Js Templating</p>
                  <p> <FaRegCircleCheck />Express JS Routing with Middleware ( use() , set() )</p>
                  <p> <FaRegCircleCheck />Express JS render()</p>
                  <p> <FaRegCircleCheck />Express JS send()</p>
                  <p> <FaRegCircleCheck />Express JS Routing with HTTP Methods (get,post,delete,put)</p>
                  <p> <FaRegCircleCheck />Express JS with session</p>
                  <p> <FaRegCircleCheck />Node Js with Jade Template Engine</p>


                </div>
              </div>
            </div>




            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                  Node Js With Mysql Database
                </button>
              </h2>
              <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Node Js with MySQL</p>
                  <p> <FaRegCircleCheck />Node Js with Mysql Connection</p>
                  <p> <FaRegCircleCheck />Node Js CRUD ( Insert , update ,delete , Select )</p>
                  <p> <FaRegCircleCheck />Node Js Cookie Parser</p>

                  <p> <FaRegCircleCheck />Node Js Session</p>
                  <p> <FaRegCircleCheck />Node Js with body-parser (For Passing JSON and url-encoded Data)</p>
                  <p> <FaRegCircleCheck />Node Js with multer ( For File Uploading)</p>
                  <p> <FaRegCircleCheck />Node Js Query String </p>

                  <p> <FaRegCircleCheck />Node Js POST Request</p>

                  <p> <FaRegCircleCheck />Node Js with Mysql Insert Using Forms</p>
                  <p> <FaRegCircleCheck />Node Js with Mysql Select and Show in Table Format</p>
                  <p> <FaRegCircleCheck />Node Js with Mysql Delete Records from database</p>
                  <p> <FaRegCircleCheck />Node Js with Mysql Edit / Update Data Using Forms </p>

                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                  Node Js With Mongo DB (No SQL Database)
                </button>
              </h2>
              <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Mongo Db Installation</p>
                  <p> <FaRegCircleCheck />Mongo Db Path and Mongochef</p>
                  <p> <FaRegCircleCheck />Mongo Db create and drop database</p>
                  <p> <FaRegCircleCheck />Mongo Db create and drop collections</p>
                  <p> <FaRegCircleCheck />Mongo Db insert</p>
                  <p> <FaRegCircleCheck />Mongo Db query documents</p>

                  <p> <FaRegCircleCheck />Mongo Db AND OR Condition</p>
                  <p> <FaRegCircleCheck />Mongo Db update Documents</p>
                  <p> <FaRegCircleCheck />Mongo Db Remove Documents</p>
                  <p> <FaRegCircleCheck />Mongo Db Selecting fields </p>

                  <p> <FaRegCircleCheck />Mongo Db limit,skip and sort</p>

                  <p> <FaRegCircleCheck />Mongo Db indexing</p>
                  <p> <FaRegCircleCheck />Mongo Db Aggregation</p>
                  <p> <FaRegCircleCheck />Mongo Db backup and restore</p>
                  <p> <FaRegCircleCheck />Node Js based Ecommerce Project </p>


                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
                  Node With REST API
                </button>
              </h2>
              <div id="collapsethirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Introduction to REST API</p>
                  <p> <FaRegCircleCheck />REST Architecture</p>
                  <p> <FaRegCircleCheck />HTTP methods</p>
                  <p> <FaRegCircleCheck />HTTP response</p>
                  <p> <FaRegCircleCheck />Creating REST</p>
                  <p> <FaRegCircleCheck />Testing REST</p>

                  <p> <FaRegCircleCheck />POSTMAN</p>

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

export default Node
