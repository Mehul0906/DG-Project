import React, { useEffect } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function Advance_digital_marketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Advance Digital Marketing</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/digital_marketing1.png" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Advance Digital Marketing</h2>
                            <p>Our digital marketing course covers SEO, social media marketing, email marketing, and more, equipping you with the tools to succeed in the competitive online landscape.</p>
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
            {/* <section className='courses_icon'>
                <div className='container'>
                    <ul className='courses_icon_img'>
                        <li><img src="./img/digital2.png" alt="" /><p>CMS Hub</p></li>
                        <li><img src="./img/digital3.jpg" alt="" /><p>Canvas</p></li>
                        <li><img src="./img/digital4.png" alt="" /><p>Semrush</p></li>
                        
                    </ul>
                  
                </div>
            </section> */}

            <section className='subject_section' data-aos="fade-up"
                data-aos-duration="3000">
                <div className='container'>
                    <div className="offer_title course_module_title" >
                        <h2>Course Modules</h2>

                    </div>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Digital Marketing Overview
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Introduction To Digital Marketing</p>
                                    <p><FaRegCircleCheck />Benefits Of Digital Marketing</p>
                                    <p><FaRegCircleCheck />Comparing Digital And Traditional Marketing </p>
                                    <p><FaRegCircleCheck />Digital MarketingProcess in Details </p>
                                    <p><FaRegCircleCheck />Types of visibility </p>
                                    <p><FaRegCircleCheck />Increasing Visibility </p>
                                    <p><FaRegCircleCheck />Visitors Engagement</p>
                                    <p><FaRegCircleCheck />Bringing Targeted Traffic</p>
                                    <p><FaRegCircleCheck />Converting Traffic into Leads </p>
                                    <p><FaRegCircleCheck />Conversion Types </p>
                                    <p><FaRegCircleCheck />ConversionProcess</p>



                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Website Creation & Planning
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Difference between Internet &web</p>
                                    <p><FaRegCircleCheck />Basic Concept of Web Page Design</p>
                                    <p><FaRegCircleCheck />HTML</p>
                                    <p><FaRegCircleCheck />CSS</p>
                                    <p><FaRegCircleCheck />Wordpress</p>
                                    <p><FaRegCircleCheck />Introduction of domain names & domain extensions</p>
                                    <p><FaRegCircleCheck />Introduction of web server & webhosting</p>
                                    <p><FaRegCircleCheck />Different types of webservers</p>
                                    <p><FaRegCircleCheck />Different types of websites </p>
                                    <p><FaRegCircleCheck />Planning & Conceptualizing a Website </p>
                                    <p><FaRegCircleCheck />Create a Creative Website</p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Search Engine Optimization [SEO]
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Introduction to SEO</p>
                                    <p><FaRegCircleCheck />Introduction to SERP</p>
                                    <p><FaRegCircleCheck />Keyword Research and Analysis</p>
                                    <p><FaRegCircleCheck />Preparing a keyword list for Project</p>
                                    <p><FaRegCircleCheck />Keyword Analysis Tools</p>
                                    <p><FaRegCircleCheck />Competitor Keyword Analysis</p>
                                    <p><FaRegCircleCheck />Off-Page Optimization</p>
                                    <p><FaRegCircleCheck />On-Page Optimization </p>
                                    <p><FaRegCircleCheck />Search Engine Algorithms</p>
                                    <p><FaRegCircleCheck />SEO Reporting</p>
                                    <p><FaRegCircleCheck />Importance of Log tail & Short tail Keywords</p>
                                    <p><FaRegCircleCheck />Checking plagiarism for all landing pages</p>
                                    <p><FaRegCircleCheck />Page Loading Speed Optimization </p>
                                    <p><FaRegCircleCheck />Mobile Friendly Optimization</p>
                                    <p><FaRegCircleCheck />URL renaming/re-writing</p>
                                    <p><FaRegCircleCheck />Meta Tile Optimization</p>
                                    <p><FaRegCircleCheck />Meta Description Optimization</p>
                                    <p><FaRegCircleCheck />Meta Keywords</p>
                                    <p><FaRegCircleCheck />Content Optimization and planning</p>
                                    <p><FaRegCircleCheck />Add Internal Linking</p>
                                    <p><FaRegCircleCheck />Image-optimization</p>
                                    <p><FaRegCircleCheck />Header Tag Optimization</p>
                                    <p><FaRegCircleCheck />HTML and XML Sitemap Creation</p>
                                    <p><FaRegCircleCheck />Robots.txt Creation</p>
                                    <p><FaRegCircleCheck />Canonical tag Optimization</p>
                                    <p><FaRegCircleCheck />Blog Importance</p>
                                    <p><FaRegCircleCheck />Social Media Pages integration</p>
                                    <p><FaRegCircleCheck />Importance of https </p>
                                    <p><FaRegCircleCheck />AlexaRank,MozRank</p>
                                    <p><FaRegCircleCheck />Search Engine Submission</p>
                                    <p><FaRegCircleCheck />Article Submission</p>
                                    <p><FaRegCircleCheck />SEO Tools</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    Search Engine Marketing [SEM]
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Introduction To Paid Ad</p>
                                    <p><FaRegCircleCheck />Display Advertising</p>
                                    <p><FaRegCircleCheck />Google Shopping Ads</p>
                                    <p><FaRegCircleCheck />Re-marketing In Ad Words</p>
                                    <p><FaRegCircleCheck />Basic Ad Words Terminology</p>
                                    <p><FaRegCircleCheck />Campaign Setup</p>
                                    <p><FaRegCircleCheck />Types of Campaign</p>
                                    <p><FaRegCircleCheck />Location Settings and Advanced Settings</p>
                                    <p><FaRegCircleCheck />Budget Settings </p>
                                    <p><FaRegCircleCheck />Ad groups Structure </p>
                                    <p><FaRegCircleCheck />Ad Format and Guidelines</p>
                                    <p><FaRegCircleCheck />Ad Extensions </p>
                                    <p><FaRegCircleCheck />Display ads/Re-marketing </p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                    Social Media Optimization[SMO]
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Role Of Social Media In Digital Marketing</p>
                                    <p><FaRegCircleCheck />Which Social Media Platform To Use?</p>
                                    <p><FaRegCircleCheck />Social Media Platforms – Facebook, Twitter, LinkedIn, Instagram,YouTube And Google+</p>
                                    <p><FaRegCircleCheck />Audit Tools Of Social Media</p>
                                    <p><FaRegCircleCheck />Use Of Social Media Management Tools</p>



                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                    Social Media Marketing [SMM]
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />What Are Social Media Ads?</p>
                                    <p><FaRegCircleCheck />Difference Between Social Media And Search Engine Ads.</p>
                                    <p><FaRegCircleCheck />Displaying Ads- Facebook, Twitter, LinkedIn, Instagram & YouTube</p>
                                    <p><FaRegCircleCheck />Effective Ads To Lead Generation</p>
                                    <p><FaRegCircleCheck />Creating FacebookAds</p>
                                    <p><FaRegCircleCheck />Different types of Facebook ads creation</p>
                                    <p><FaRegCircleCheck />Facebook Adoptimization</p>
                                    <p><FaRegCircleCheck />Communicating Value of Display on Linkedin</p>
                                    <p><FaRegCircleCheck />Communicating Value of Display on Twitter</p>
                                    <p><FaRegCircleCheck />Plan a Campaign </p>




                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    Email Marketing
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />What Is Email Marketing</p>
                                    <p><FaRegCircleCheck />Why E-Mail Marketing Is Necessary?</p>
                                    <p><FaRegCircleCheck />Popular Email Marketing Software's</p>
                                    <p><FaRegCircleCheck />Best Ways To Target Audience And Generate Leads</p>
                                    <p><FaRegCircleCheck />Mail Chimp Automations</p>
                                    <p><FaRegCircleCheck />Integrate MailChimp with Facebook</p>
                                    <p><FaRegCircleCheck />Google Analytics Link Tracking inMailChimp</p>
                                    <p><FaRegCircleCheck />Improving ROI With A/B Testing  </p>





                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                    Web Analytics
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Information to Analysis</p>
                                    <p><FaRegCircleCheck />Pre-Analysis Report</p>
                                    <p><FaRegCircleCheck />Where is Web Analytics Used</p>
                                    <p><FaRegCircleCheck />Google Analytics Premium & Standard Comparison</p>
                                    <p><FaRegCircleCheck />Content Analysis</p>
                                    <p><FaRegCircleCheck />Site Audit Tools</p>
                                    <p><FaRegCircleCheck />Social Media Analysis ToolGoogle Analytics In depth</p>
                                    <p><FaRegCircleCheck />Google Web Master Tool  </p>





                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                    Lead Generation
                                </button>
                            </h2>
                            <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Lead Generations Steps</p>
                                    <p><FaRegCircleCheck />Best Way To Generate Lead</p>
                                    <p><FaRegCircleCheck />How To Generate Leads From – LinkedIn, Facebook, Twitter, Direct Mail, Blogs, Videos, Info-graphics, Webinar, Strong Branding, Media</p>
                                    <p><FaRegCircleCheck />Tips To Convert Leads To Business</p>
                                    <p><FaRegCircleCheck />Creating lead nurturing strategy</p>
                                    <p><FaRegCircleCheck />Understanding lead funnel</p>


                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                    Affiliate Marketing
                                </button>
                            </h2>
                            <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />What Is Affiliate Marketing</p>
                                    <p><FaRegCircleCheck />How Affiliate Marketing Works</p>
                                    <p><FaRegCircleCheck />How To Find Affiliate Niche</p>
                                    <p><FaRegCircleCheck />Different Ways To Do Affiliate Marketing</p>
                                    <p><FaRegCircleCheck />Top Affiliate Marketing Networks</p>
                                    <p><FaRegCircleCheck />Methods To Generate And Convert Leads</p>
                                    <p><FaRegCircleCheck />Live examples of how people are making money as anaffiliate</p>
                                    <p><FaRegCircleCheck />Getting your started as anaffiliate</p>
                                    <p><FaRegCircleCheck />Some of the top affiliate network in the world</p>


                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseelevan" aria-expanded="false" aria-controls="collapseelevan">
                                    Content Marketing
                                </button>
                            </h2>
                            <div id="collapseelevan" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />What Is Content Marketing?</p>
                                    <p><FaRegCircleCheck />Introduction To Content Marketing</p>
                                    <p><FaRegCircleCheck />Content Marketing Strategy</p>
                                    <p><FaRegCircleCheck />How To Write Great Compelling Content</p>
                                    <p><FaRegCircleCheck />Keyword Research For Content Ideas</p>
                                    <p><FaRegCircleCheck />Unique Ways To Write Magnetic Headlines</p>
                                    <p><FaRegCircleCheck />Tools To Help Content Creation</p>
                                    <p><FaRegCircleCheck />How To Market The Same Content On Different Platforms</p>



                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                                    Live Project
                                </button>
                            </h2>
                            {/* <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Trusted, Community Based Carpooling</p>
                                    <p><FaRegCircleCheck /> E-commerce Portal</p>
                                    <p>  <FaRegCircleCheck />To-do List - Full Stack Application </p>
                                    <p> <FaRegCircleCheck />Foody - Online Food Ordering System</p>
                                </div>
                            </div> */}

                        </div>
                    </div>


                </div>
            </section>
            <Footer />
        </>
    )
}

export default Advance_digital_marketing
