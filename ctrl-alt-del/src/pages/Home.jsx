
import React from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import '../styles/home.css';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { FaBookOpen, FaUsers, FaPenFancy, FaComments } from "react-icons/fa";

export default function Home() {
    return ( 
      <>
        <Navbar />

        {/* Section 1: Carousel */}
        <section className="sec1">
            <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false">
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

        {/* Section 2: Story & CTA */}
        <section className="sec2">
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
        </section>

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

<<<<<<< HEAD
       <Footer />
=======
        <Footer />
>>>>>>> 65913c9225f6916a91bfd9506a70c9cb6ace2de5
      </>
    );
}
