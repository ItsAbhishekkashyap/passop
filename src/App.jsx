import { useState } from 'react'
import Navbar from './component/Navbar'
import Manager from './component/Manager'

import './App.css'
import Footer from './component/Footer'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ToastContainer
        className="toast-container z-50"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <Navbar />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className='min-h-[92vh]  md:min-h-[93vh]'>
          <Manager />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
