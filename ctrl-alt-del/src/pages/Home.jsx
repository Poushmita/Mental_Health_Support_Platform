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
        </section>


        <Footer />
      </>
    )
  }
  
