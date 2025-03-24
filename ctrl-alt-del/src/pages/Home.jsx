import home1 from '../assets/home1.jpg';
import '../styles/home.css'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function Home() {

    return ( 
      <>
        <Navbar />
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
        </section>


        <Footer />
      </>
    );
  };
  
