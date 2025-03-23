import Navbar from "../components/Navbar";

export default function Home() {

    return ( 
      <>
        <Navbar />
        <h1>This is our home page.</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam perferendis, quaerat quasi quos expedita!</p>
            <button class="btn btn-success">Bootstrap Button</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click Me
            </button>

        </div>

      </>
    )
  }
  
