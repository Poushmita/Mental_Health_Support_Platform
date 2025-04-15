import React, { useState } from 'react';
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import '../styles/home.css';
import Footer from '../components/Footer';
import { FaBookOpen, FaUsers, FaPenFancy, FaComments } from "react-icons/fa";

export default function Home() {
  const [hovered, setHovered] = useState({});
  const handleHover = (index) => {
    setHovered((prev) => ({ ...prev, [index]: true }));
  };
  const texts = [
    "the journey to mental well-being begins with understanding.",
    "We believe those who seek support deserve a safe space:",
    "A place to express,",
    "to heal,",
    "to grow.",
    "This is the community we’re building.",
    "Step in, feel heard, find strength."
  ];


    return ( 
      <>
        

        {/* Section 1: Carousel */}
        <section className="sec1">
            <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide1} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src={slide2} className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src={slide3} className="d-block w-100" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                  <img src={slide4} className="d-block w-100" alt="Slide 4" />
                </div>
                <div className="carousel-item">
                  <img src={slide5} className="d-block w-100" alt="Slide 5" />
                </div>
                <div className="carousel-item">
                  <img src={slide6} className="d-block w-100" alt="Slide 6" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </section>

        {/* Section 2: Story & CTA */}
        <section 
          className="sec2 relative bg-cover bg-center bg-no-repeat min-h-screen w-full pt-20 md:pt-6 lg:pt-8 px-6 md:px-20 lg:px-36 text-center"
        >
          <div className="story-container">
            <p className="mb-6 md:mb-8 lg:mb-10 leading-relaxed font-atma text-left">
              <span className='md:text-xs text-sm font-extrabold'>
                NOT EVERYONE UNDERSTANDS.
              </span>
            </p>
            {texts.map((text, index) => (
              <p 
                key={index} 
                onMouseEnter={() => handleHover(index)}
                className="text-sm md:text-xl lg:text-4xl leading-relaxed font-atma text-left transition duration-300"
                style={{ color: hovered[index] ? "#5C4033" : "#f5e6cc" }} // ✅ Corrected inline styles
              >
                {text}
              </p>
            ))}

            <button className="cta-button mt-4">Get Started</button>
          </div>
          
        </section>

        {/* <section className="sec2">
          <div className="story-container">
            <h2>NOT EVERYONE UNDERSTANDS.</h2>
            <p>
              The journey to mental well-being begins with understanding. We believe those who seek support deserve a safe space: 
              a place to express, to heal, to grow.
            </p>
            <p>
              This is the community we’re building. Step in, feel heard, find strength.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </section> */}

        {/* Section 3: Features */}
        <section className="sec3">
          <h2>Our Features</h2>
          <div className="features-container">
            <div className="feature">
              <FaBookOpen className="feature-icon" />
              <h3>Read Blogs</h3>
              <p>Access insightful articles and stories about mental health and personal growth.</p>
            </div>
            <div className="feature">
              <FaUsers className="feature-icon" />
              <h3>Community Support</h3>
              <p>Engage with a supportive community that listens and understands.</p>
            </div>
            <div className="feature">
              <FaPenFancy className="feature-icon" />
              <h3>Write Your Journal</h3>
              <p>Express your thoughts and emotions in a private, safe space.</p>
            </div>
            <div className="feature">
              <FaComments className="feature-icon" />
              <h3>Live Chat</h3>
              <p>Connect with mentors and professionals for real-time support.</p>
            </div>
          </div>
        </section>
      </>
    );
}
