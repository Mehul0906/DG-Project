import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

function Footer() {

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_row">
            <div className="footer_row_col">
              <div className="logo">

                <img src="./img/DG Multimedia Institute pg png.png" alt="" />

              </div>
              <div className="footer_icon">
                <ul>
                  <li>
                    <Link to="https://www.facebook.com/dgmultimedia63?mibextid=ZbWKwL"  target="_blank">
                      {/* <FaFacebook /> */}
                      <img src="./img\facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/dg_multimedia_?igsh=emk2czZ6Z3hldXc5" target="_blank">
                      <img src="./img\instagram.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://youtube.com/@dgmultimediae?si=J4U9uUd1RFAMFF1B" target="_blank" >
                      <img src="./img\youtube.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/dg-multimedia-bb6232311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                      <img src="./img\linkedin.png" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="scanner">
                <img src="./img/scanner.jpeg" alt="scanner" />
              </div>
            </div>

            <div className="footer_nav footer_row_col" >
              <h5 className="footer_title">Menu</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
               <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>

            <div className="footer_nav footer_row_col" >
              <h5 className="footer_title">Courses</h5>
              <ul>
                <li className="footer_dropdown">
                  <Link>Master Designing<FaAngleRight /></Link>

                  <ul className="footer_dropdown_content" id="drop1">
                    <li><Link to="/graphics">Graphics Design</Link></li>
                    <li><Link to="/ui_ux"> UI/UX Design</Link> </li>
                  </ul>
                </li>
                <li className="footer_dropdown">
                  <Link>Animation<FaAngleRight /></Link>

                  <ul className="footer_dropdown_content" id="drop2">
                    <li><Link to="/2d_animation">2D Animation</Link></li>
                    <li><Link to="/3d_animation"> 3D Animation</Link> </li>
                    <li><Link to="/animation_master">Master in 2D/3D animation</Link></li>
                  </ul>
                </li>
                <li className="footer_dropdown">
                  <Link>Programming  <FaAngleRight /></Link>
                  <ul className="footer_dropdown_content" id="drop3">
                    <li><Link to="/react_native">React Native</Link></li>
                    <li><Link to="/react">React JS</Link></li>
                    <li><Link to="/node">Node JS </Link></li>
                    <li><Link to="/angular">Angular JS</Link> </li>
                    <li><Link to="/python">Python </Link></li>
                    <li><Link to="/laravel">Laravel</Link> </li>
                    <li><Link to="/php">php</Link> </li>
                    <li ><Link to="/java">C,C++,Java </Link></li>
                  </ul>
                </li>


                <li className="footer_dropdown">
                  <Link>Master Programming  <FaAngleRight /></Link>
                  <ul className="footer_dropdown_content" id="drop4">
                    <li><Link to="/fronted">Frontend Developer</Link></li>
                    <li><Link to="/backend">Backend Developer</Link></li>
                    <li><Link to="/full_stack">Full Stack development </Link></li>
                    <li><Link to="/flutter">Flutter</Link> </li>
                  </ul>
                </li>
                <li className="footer_dropdown">
                  <Link>Business Development<FaAngleRight /> </Link>
                  <ul className="footer_dropdown_content" id="drop5">
                    <li><Link to="/digital">Digital Marketing</Link></li>
                    <li><Link to="/advance_digital"> Advance Digital Marketing</Link></li>
                    <li><Link to="/personality"> Personality development </Link></li>
                    <li><Link to="/social_media">Social Media Influencer</Link></li>
                    <li><Link to="/youtube_growth">Career on youtube</Link></li>
                    <li><Link to="/instagram_growth">   Instagram Growth Courses</Link></li>
                  </ul>
                </li>
                <li className="footer_dropdown">
                  <Link> Next Gen<FaAngleRight /> </Link>
                  <ul className="footer_dropdown_content" id="drop6">
                    <li ><Link to="/artificial_intelligence">Artificial Intelligence</Link></li>
                    <li ><Link to="/machine_learning">Machine Learning</Link></li>
                    <li><Link to="/cyber">Cyber security & Ethical hacking</Link> </li>
                  </ul>
                </li>
                <li className="footer_dropdown">
                  <Link>Foundation<FaAngleRight /></Link>
                  <ul className="footer_dropdown_content" id="drop7">
                    <li ><Link to="/ccc">CCC </Link></li>
                    {/* <li ><Link to="/java">C,C++,Java </Link></li> */}
                  </ul>
                </li>
              </ul>
            </div>

            <div className='contact_details footer_row_col'>
              <h5 className="footer_title">Reach Us</h5>
              <div className="contact_info">
                <IoCall className="icon" />
                <div>
                  <h6>Phone:</h6>
                  <Link to="tel:+91 91047 90039"> <p>+91 91047 90039</p></Link>
                </div>
              </div>
              <div className="contact_info" >
                <MdEmail className="icon" />
                <div>
                  <h6>Email:</h6>
                  <Link to="mailto:info@dgmultimedia.in"><p>info@dgmultimedia.in</p></Link>
                </div>
              </div>
              <div className="contact_info">
                <FaLocationDot className="icon" />

                <div>
                  <h6>Address:</h6>
                  <Link to="https://www.google.com/maps/place/Dg+Multimedia+Education+Institute/@21.1754862,72.8771458,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04fc87b5fdfcb:0x2d136e6092ed978a!8m2!3d21.1754862!4d72.8771458!16s%2Fg%2F11y4knfw3m?entry=ttu"><p>301, Madhav Shopping Center , <br /> Godadara , Surat.</p></Link>
                </div>
              </div>
              {/* <div>
                <h6>Follow Us:</h6>

                <FaFacebook />


                <IoLogoInstagram />

              </div> */}
            </div>
          </div>
        </div>


      </footer>
      <div className="copyright">
        <p>Copyright © 2024 DGMultimedia</p>
      </div>
    </>
  );
}

export default Footer;
