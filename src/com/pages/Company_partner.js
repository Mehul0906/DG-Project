import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom'

function Company_partner() {
  const options = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: false,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 5,
      },
      724: {
        items: 4,
      },
      500: {
        items: 3,
      },
      370: {
        items: 2,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      }
    },
  };
  return (
    <>
      <section className="team_section company_partner">
        <div className="container">
          <div className='student_reviews_title'>
            <h2>Partner Company</h2>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner1.png" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner2.jpg" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner3.jpeg" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner6.png" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner7.png" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner8.png" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner9.png" alt="" />
              </div>

            </div>
            <div class="item">
              <div className='partner-img'>
                <img src="../img/partner10.png" alt="" />

              </div>
            </div>
            {/* <div class="item">
             
            </div>
            <div class="item">
             
            </div> */}

          </OwlCarousel>
        </div>
      </section>
    </>
  )
}

export default Company_partner
