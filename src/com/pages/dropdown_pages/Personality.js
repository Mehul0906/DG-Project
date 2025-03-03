import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Personality() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Personality development </h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/personality.jpg" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Personality development </h2>
                            <p> Your launchpad to individual worth and self-improvement is personal development. Constant psychological growth assures you that there is no ceiling on how much you can achieve. As separate beings who first should grow as individuals until we can affect revolutionary change, we aren't created to advance humanity without personal development.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>1 Months</span></button>
                                <button>Daily Time <span>1 Hours</span></button>
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
                                    Spoken English
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Framing of sentences</p>

                                    <p><FaRegCircleCheck />Conversation Practice </p>

                                    <p>  <FaRegCircleCheck /> Business Vocabulary</p>

                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Time management
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Why Time Management,</p>

                                    <p><FaRegCircleCheck />Pillars of Time Management </p>

                                    <p>  <FaRegCircleCheck />Planning</p>

                                    <p> <FaRegCircleCheck />Prioritizing</p>

                                    <p><FaRegCircleCheck />Scheduling </p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Anger and Stress Management
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Understanding Anger </p>
                                    <p> <FaRegCircleCheck />Dangers of Anger</p>

                                    <p><FaRegCircleCheck />Managing Anger</p>

                                    <p>  <FaRegCircleCheck />Empathy </p>
                                    <p> <FaRegCircleCheck />Dealing with Stress </p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    Presentation Skills
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Public Speaking </p>
                                    <p> <FaRegCircleCheck />Preparation</p>

                                    <p><FaRegCircleCheck /> Organization of content </p>

                                    <p>  <FaRegCircleCheck />Content of presentation</p>
                                    <p> <FaRegCircleCheck /> Audience Handling </p>
                                    <p> <FaRegCircleCheck />Effective presentation </p>

                                    <p><FaRegCircleCheck />Delivery  </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    Telecommunication Etiquettes

                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Telephone etiquettes</p>

                                    <p><FaRegCircleCheck /> Receiving calls </p>

                                    <p>  <FaRegCircleCheck />Transferring calls</p>

                                    <p> <FaRegCircleCheck />Telephonic interview</p>
                                    <p>  <FaRegCircleCheck />Taking message</p>

                                    <p> <FaRegCircleCheck />Making outgoing calls</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    Interview skills (the art of getting selected)
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">

                                    <p> <FaRegCircleCheck /> Personal Interview - Interviews are the gateway to the Corporate World. Hence, it
                                        is vitally important to be familiar with the Do’s and Don’ts of attending a job
                                        interview. </p>
                                    <p> <FaRegCircleCheck />Group Discussions - Group discussions are important method for employers to
                                        select prospective candidates. The students need to portray the right skills in
                                        limited amount of time. </p>
                                    <p> <FaRegCircleCheck />Mock interviews - We train participants through mock interviews</p>

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

export default Personality
