<<<<<<< HEAD
import React from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";  
import slide3 from "../assets/slide3.png";  
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
=======
import home1 from '../assets/home1.jpg';
import '../styles/home.css'
import Footer from '../components/Footer';
>>>>>>> 8b412f40dd46526075930a977c6581cd30f0fa53
import Navbar from "../components/Navbar";

export default function Home() {

    return ( 
      <>
        <Navbar />
<<<<<<< HEAD
        <section>
          <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
=======
        <section
          className="sec1 grid place-items-center bg-no-repeat bg-cover bg-center w-full min-h-screen"
          style={{backgroundImage: `url(${home1})`}}
        >
          <h1 className="text-3xl font-serif text-black">
            Section 1
          </h1>
        </section>

        <section className="sec2">
          <div>
              <h1 className="m-2">section2</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam perferendis, quaerat quasi quos expedita!</p>
              <button className="btn btn-success">Bootstrap Button</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click Me
              </button>

>>>>>>> 8b412f40dd46526075930a977c6581cd30f0fa53
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="Slide 1"/>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="Slide 2"/>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="Slise 3"/>
            </div>
            <div className="carousel-item">
              <img src={slide4} className="d-block w-100" alt="Slise 4"/>
            </div>
            <div className="carousel-item">
              <img src={slide5} className="d-block w-100" alt="Slise 5"/>
            </div>
            <div className="carousel-item">
              <img src={slide6} className="d-block w-100" alt="Slise 6"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </section>


        <Footer />
      </>
    );
  };
  
