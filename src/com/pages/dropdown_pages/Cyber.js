import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Cyber() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Cyber security & Ethical hacking</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/cyber_security.jpg" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Cyber security & Ethical hacking</h2>
                            <p>Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories.</p>

                            <div className='course_button'>
                                <button>Course Duration <span>15 Months</span></button>
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
                                    Introduction To Hacking & Cyber Ethics
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Why Security?</p>

                                    <p><FaRegCircleCheck />Why Attacks?</p>

                                    <p>  <FaRegCircleCheck />Hacking – Introduction</p>

                                    <p> <FaRegCircleCheck />Types of Hackers</p>

                                    <p><FaRegCircleCheck />Malicious Hacker Strategies </p>
                                    <p> <FaRegCircleCheck /> Ethical Hacker Strategies</p>

                                    <p><FaRegCircleCheck />Steps for conducting Ethical Hacking</p>

                                    <p>  <FaRegCircleCheck />Importance of Vulnerability Research.</p>

                                    <p> <FaRegCircleCheck />Vulnerability Research References.</p>

                                    <p><FaRegCircleCheck />Conclusion  </p>
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Cyber Law And IT Act
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Types Cyber Crimes</p>

                                    <p><FaRegCircleCheck />Reporting Cyber Crimes & Incidence response</p>

                                    <p>  <FaRegCircleCheck />Introduction to IT Act 2000 & its sections</p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Setting Up Your Own Pentesting Lab
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck /> Installation & Configuration</p>

                                    <p><FaRegCircleCheck />Installing Applications on Virtual Machine</p>

                                    <p>  <FaRegCircleCheck />Advantages of Virtual Machine</p>

                                    <p> <FaRegCircleCheck />Setting up a test lab on a single machine</p>
                                    <p> <FaRegCircleCheck />Setting up a test lab on multiple machines Where to get vulnerable target machines Take Backup & Save Trouble in Future  </p>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                    Information Gathering
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />WHOIS Information Gathering</p>
                                    <p><FaRegCircleCheck />DNS Information Gathering</p>
                                    <p><FaRegCircleCheck />DNS Report</p>
                                    <p> <FaRegCircleCheck />MX-information</p>
                                    <p><FaRegCircleCheck />NS LookUp </p>
                                    <p><FaRegCircleCheck />Website Mirroring</p>
                                    <p><FaRegCircleCheck />Website Information Gathering Email Information Gathering Doxing (Peoples & Digitals Boxes)</p>
                                    <p><FaRegCircleCheck />Tools that aid in Information Gathering</p>
                                    <p><FaRegCircleCheck />Maltego & Kartoo Search Engines</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                    Basic Network Terminologies
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />IP address </p>
                                    <p><FaRegCircleCheck /> Versions of IP Address</p>
                                    <p>  <FaRegCircleCheck />Types of IP Address</p>
                                    <p>  <FaRegCircleCheck />Classes of IP addresses Categories of IP Address Network Address Translation TCP protocol</p>
                                    <p> <FaRegCircleCheck />UDP Protocol </p>
                                    <p><FaRegCircleCheck /> Difference between TCP & UDP Proxies and VPN’s</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                    Scanning & Enumeration
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Why Scanning?</p>
                                    <p> <FaRegCircleCheck />Types of Scanning  </p>
                                    <p> <FaRegCircleCheck />Objective of Scanning & Port Scanning</p>
                                    <p> <FaRegCircleCheck />Port Scanning Techniques.</p>
                                    <p> <FaRegCircleCheck />Port Scanning using Nmap</p>
                                    <p> <FaRegCircleCheck />Advance Nmap Scanning(Nmap Scripting Engine) Banner Grabbing</p>
                                    <p> <FaRegCircleCheck />Network Scanning Techniques</p>
                                    <p> <FaRegCircleCheck />Enumeration</p>
                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    HTTP And HTTPS Fundamentals
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is HTTP ? What is HTTPS ?</p>

                                    <p><FaRegCircleCheck />Difference between HTTP & HTTPS HTTP & HTTPS concepts</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                    Maintaining Anonymity, Proxy Servers & VPN
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is a Proxy Server?</p>

                                    <p><FaRegCircleCheck /> Types of Proxy Server  </p>
                                    <p> <FaRegCircleCheck />Proxy Vs VPN Servers</p>

                                    <p><FaRegCircleCheck />How To Use a Proxy? </p>

                                    <p><FaRegCircleCheck /> How to choose VPN servers? </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                    Virus, Worms & Trojans
                                </button>
                            </h2>
                            <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is Virus?</p>
                                    <p> <FaRegCircleCheck />What are Worms?</p>
                                    <p> <FaRegCircleCheck />Difference between Virus & Worms</p>
                                    <p> <FaRegCircleCheck />What are Trojans?</p>
                                    <p> <FaRegCircleCheck />How Trojans Work?</p>
                                    <p> <FaRegCircleCheck />How to hack a computer system using Trojan? How to create a Trojan?</p>
                                    <p> <FaRegCircleCheck />Introduction to some RAT Tools</p>
                                    <p> <FaRegCircleCheck />Issues in sending and executing a Trojan</p>
                                    <p> <FaRegCircleCheck />Overcoming above issues</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                    Sniffing Traffic With Wireshark & Getting Password
                                </button>
                            </h2>
                            <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Wireshark</p>
                                    <p> <FaRegCircleCheck />Understanding and working with different filters</p>

                                </div>
                            </div>
                        </div>




                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                                    Phishing And Social Engineering Attacks
                                </button>
                            </h2>
                            <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />History of Phishing What is Phishing? Types of Phishing</p>
                                    <p> <FaRegCircleCheck />Why it is called as a Social Engineering Technique?</p>
                                    <p> <FaRegCircleCheck />Steps to perform Phishing </p>
                                    <p> <FaRegCircleCheck />Tricks to perform Phishing</p>
                                    <p> <FaRegCircleCheck />Precautions against Phishing Attempts Detecting Phishing Crimes Investigating Phishing Crimes</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                                    Reverse Engineering
                                </button>
                            </h2>
                            <div id="collapsetwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to RE Briefing OllyDbg</p>
                                    <p> <FaRegCircleCheck />Patching</p>
                                    <p> <FaRegCircleCheck />Keygening</p>
                                    <p> <FaRegCircleCheck />Countermeasures</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
                                    Introduction To Web Pentesting And Bug Bounty
                                </button>
                            </h2>
                            <div id="collapsethirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />finding a valid bug and reporting it to the organization</p>
                                    <p> <FaRegCircleCheck />Companies such as Hackerone, Bugcrowd, Bugwolf, CrowdSecurify and Hatforce set up and run bug bounty programs</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourteen" aria-expanded="false" aria-controls="collapsefourteen">
                                    Introduction To Owasp To 10 & Getting Started With DVWA
                                </button>
                            </h2>
                            <div id="collapsefourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is a OWASP?</p>
                                    <p> <FaRegCircleCheck />Understanding OWASPs</p>
                                    <p> <FaRegCircleCheck />Introduction to OWASP Top 10 Vulnerabilities</p>
                                    <p> <FaRegCircleCheck />Damn Vulnerable Web Application Testing and Tutorial </p>

                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">
                                    Getting Started With Burp-Suite
                                </button>
                            </h2>
                            <div id="collapsefifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Burp Interceptor</p>
                                    <p> <FaRegCircleCheck />Burp Target</p>
                                    <p> <FaRegCircleCheck />Burp Spider</p>
                                    <p> <FaRegCircleCheck />Burp Scanner Burp Intruder Burp Repeater Burp Decoder Burp Sequencer Burp Extender</p>
                                    <p> <FaRegCircleCheck />Burp App Store- Introduction</p>
                                    <p> <FaRegCircleCheck />Live Hacking Through Burp</p>

                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesixteen" aria-expanded="false" aria-controls="collapsesixteen">
                                    Insecure Cookie And Session Management
                                </button>
                            </h2>
                            <div id="collapsesixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Session Management Implementation</p>
                                    <p> <FaRegCircleCheck />Transport Layer Security</p>
                                    <p> <FaRegCircleCheck />Cookie Attributes ?</p>
                                    <p> <FaRegCircleCheck />Session Expiration</p>
                                    <p> <FaRegCircleCheck />Client-Side Defenses for Session Management</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseventeen" aria-expanded="false" aria-controls="collapseseventeen">
                                    Google Hacking Databases And Authentication Bypass
                                </button>
                            </h2>
                            <div id="collapseseventeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Understanding how Google works</p>
                                    <p> <FaRegCircleCheck />Google basic operators</p>
                                    <p> <FaRegCircleCheck />Google advanced operators</p>
                                    <p> <FaRegCircleCheck />Automated Google tools</p>
                                    <p> <FaRegCircleCheck />How to use Google to find the desired website</p>
                                    <p> <FaRegCircleCheck />How Google can aid in searching vulnerable Website</p>
                                    <p> <FaRegCircleCheck />What is Authentication? Basic Authentication Bypass Basic Combinations to Bypass Bypass Cheat Sheet Remediation Approach</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeighteen" aria-expanded="false" aria-controls="collapseeighteen">
                                    Basic SQL Injection
                                </button>
                            </h2>
                            <div id="collapseeighteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Database Basics</p>
                                    <p> <FaRegCircleCheck />What is SQL?</p>
                                    <p> <FaRegCircleCheck />Basics of SQL Query</p>
                                    <p> <FaRegCircleCheck />Union based SQL Injection</p>
                                    <p> <FaRegCircleCheck />Error based SQL Injection </p>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenineteen" aria-expanded="false" aria-controls="collapsenineteen">
                                    Advance SQL Injection- Blind SQL Injection
                                </button>
                            </h2>
                            <div id="collapsenineteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is Blind SQL Injection?</p>
                                    <p> <FaRegCircleCheck />Time-based SQL Injection</p>
                                    <p> <FaRegCircleCheck />Boolean based SQL injection</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwenty" aria-expanded="false" aria-controls="collapsetwenty">
                                    SQL Injection – Firewall Evasion
                                </button>
                            </h2>
                            <div id="collapsetwenty" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is WAF?</p>
                                    <p> <FaRegCircleCheck />Working of WAF</p>
                                    <p> <FaRegCircleCheck />How to know if there is a Web Application Firewall?</p>
                                    <p> <FaRegCircleCheck />Techniques to Bypass WAF</p>
                                    <p> <FaRegCircleCheck />Video Demonstration – SQL Injection Firewall Evasion</p>
                                    <p> <FaRegCircleCheck />Scope of this technique</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentyone" aria-expanded="false" aria-controls="collapsetwentyone">
                                    Bypassing OTP (One Time Password)
                                </button>
                            </h2>
                            <div id="collapsetwentyone" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is OTP?</p>
                                    <p> <FaRegCircleCheck />OTP generation</p>
                                    <p> <FaRegCircleCheck />OTP brute-forcing</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentytwo" aria-expanded="false" aria-controls="collapsetwentytwo">
                                    File Inclusion And Arbitrary File Upload Vulnerability

                                </button>
                            </h2>
                            <div id="collapsetwentytwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is a Shell?</p>
                                    <p> <FaRegCircleCheck />What is LFI?</p>
                                    <p> <FaRegCircleCheck />What is RCE?</p>
                                    <p> <FaRegCircleCheck />RCE Exploitation Demo </p>
                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentythree" aria-expanded="false" aria-controls="collapsetwentythree">
                                    XSS – Cross Site Scripting
                                </button>
                            </h2>
                            <div id="collapsetwentythree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />What is XSS?</p>
                                    <p> <FaRegCircleCheck />How to find it?</p>
                                    <p> <FaRegCircleCheck />XSS Reflected & Stored</p>
                                    <p> <FaRegCircleCheck />XSS DOM Based </p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentyfour" aria-expanded="false" aria-controls="collapsetwentyfour">
                                    Exploitation Using Metasploit
                                </button>
                            </h2>
                            <div id="collapsetwentyfour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to this framework</p>
                                    <p> <FaRegCircleCheck />Getting hands on commands</p>
                                    <p> <FaRegCircleCheck />Hacking windows with Metasploit</p>
                                    <p> <FaRegCircleCheck />Hacking Linux with Metasploit</p>
                                    <p> <FaRegCircleCheck />Android Hacking using Metasploit</p>
                                    <p> <FaRegCircleCheck />MSFVenom – Payload creation</p>
                                    <p> <FaRegCircleCheck />MSFVenom - Creating Malicious PDF Files through MSF Module</p>
                                </div>
                            </div>
                        </div>



                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentyfive" aria-expanded="false" aria-controls="collapsetwentyfive">
                                    Wireless Hacking & Wifi Password Cracking
                                </button>
                            </h2>
                            <div id="collapsetwentyfive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Wireless Protocols</p>
                                    <p> <FaRegCircleCheck />Wireless Routers-Working</p>
                                    <p> <FaRegCircleCheck />Attacks on Wireless Routers</p>
                                    <p> <FaRegCircleCheck />Cracking Wireless routers password(WEP)</p>
                                    <p> <FaRegCircleCheck />Wi-Fi Phisher</p>
                                    <p> <FaRegCircleCheck />Securing routers from Hackers</p>
                                    <p> <FaRegCircleCheck />Countermeasures</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentysix" aria-expanded="false" aria-controls="collapsetwentysix">
                                    Wanna Cry Case Study & Eternal Blue Practical
                                </button>
                            </h2>
                            <div id="collapsetwentysix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Introduction to Wanna cry ransomware</p>
                                    <p> <FaRegCircleCheck />Understanding the working of Wanna cry</p>
                                    <p> <FaRegCircleCheck />Hands on practical with metasploit</p>
                                    <p> <FaRegCircleCheck />Expoliting the vulnerability</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwentyseven" aria-expanded="false" aria-controls="collapsetwentyseven">
                                    Penetration Testing
                                </button>
                            </h2>
                            <div id="collapsetwentyseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p> <FaRegCircleCheck />Types of Penetration Testing</p>
                                    <p> <FaRegCircleCheck />Do-It-Yourself Testing</p>
                                    <p> <FaRegCircleCheck />Outsourcing Penetration Testing Services</p>
                                    <p> <FaRegCircleCheck />Terms of Engagement</p>
                                    <p> <FaRegCircleCheck />Project Scope & Pentest Service Level Agreements</p>
                                    <p> <FaRegCircleCheck />Testing points & Locations</p>
                                    <p> <FaRegCircleCheck />Automated & Manual Testing</p>
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

export default Cyber
