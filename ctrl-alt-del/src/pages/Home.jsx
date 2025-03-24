
import React from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import home1 from '../assets/home1.jpg';
import '../styles/home.css'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function Home() {

    return ( 
      <>
        <Navbar />
         <section className="sec1">
            <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={slide1} class="d-block w-100" alt="Slide 1" />
                </div>
                <div class="carousel-item">
                  <img src={slide2} class="d-block w-100" alt="Slide 2" />
                </div>
                <div class="carousel-item">
                  <img src={slide3} class="d-block w-100" alt="Slide 3" />
                </div>
                <div class="carousel-item">
                  <img src={slide4} class="d-block w-100" alt="Slide 4" />
                </div>
                <div class="carousel-item">
                  <img src={slide5} class="d-block w-100" alt="Slide 5" />
                </div>
                <div class="carousel-item">
                  <img src={slide6} class="d-block w-100" alt="Slide 6" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </section>


        <section className='sec2'>
          <h1>section2</h1>
        </section>


        <section className='sec3'>
          <h1>section3</h1>
        </section>

       <Footer />
      </>
    );
  };
  
