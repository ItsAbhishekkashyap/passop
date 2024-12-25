import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()

  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }

  }, [])

  const showPassword = () => {
    passwordRef.current.type = "text"

    if (ref.current.src.includes("hidden.png")) {

      ref.current.src = "eye.png"
      passwordRef.current.type = "text"

    }
    else {
      passwordRef.current.type = "password"
      ref.current.src = "hidden.png"

    }

  }


  const savePassword = () => {

    if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){

      setpasswordArray([...passwordArray, {...form, id: uuidv4()}]),
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      console.log(...passwordArray, form)
      setform({ site: "", username: "", password: "" })
      toast.success('Password Saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
    else{
      toast('Error: Password not saved!');
    }
  }

  const deletePassword = (id) => {

    let c = confirm("Are you sure you want to delete your password")
    if(c){

      setpasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))

      toast('Password deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: "Bounce",
      });
    }
  
  }

  const editPassword = (id) => {
    
    setform(passwordArray.filter(i=>i.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



  const copyText = (text) => {
    toast('Copied to clipboard!', {
      // className: "z-50 mt-10",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: "Bounce",
    });
    navigator.clipboard.writeText(text)
  }

  return (
    <div>

      {/* <ToastContainer 
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
      {/* <ToastContainer /> */}




      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="py-28 px-5 md:px-0 md:py-28  md:mycontainer ">
        <h1 className="text-4xl font-bold text-center ">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP&gt;</span>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your own password manager
        </p>
        <div className="text-black flex flex-col gap-5 p-4 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website url"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-2">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full px-2 w-full border border-green-500"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full  px-2 w-full border border-green-500"
                type="password"
                name="password"
                id="password"
              />
              <span onClick={showPassword} className="absolute cursor-pointer right-[8px] top-[3px] text-black">
                <img ref={ref} width={22} className="cursor-pointer" src="eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className="text-black flex gap-2 justify-center items-center hover:bg-green-400 bg-green-500 w-fit rounded-full px-8 py-2">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>



        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No passwords to show </div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2">Sites</th>
                <th className="py-2">Username</th>
                <th className="py-2">Passwords</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {

                return <tr key={index}>

                  <td className="py-2  gap-2 border border-white text-wrap text-center ">
                    <div className="flex gap-4 justify-center items-center">
                      <span><a href={item.site} target="_blank">{item.site}
                      </a>
                      </span>
                      <img className="w-4 cursor-pointer" src="copy2.png" alt="" onClick={() => (copyText(item.site))} />
                    </div>



                  </td>



                  <td className="py-2 border border-white text-center ">
                    <div className="flex gap-4 item-center justify-center">
                      <span>{item.username}</span>
                      <img className="w-4 h-4 cursor-pointer" src="copy2.png" alt="" onClick={() => (copyText(item.username))} />

                    </div>
                  </td>
                  <td className="py-2  border border-white text-center">
                    <div className="flex gap-4 item-center justify-center">
                      <span>{item.password}</span>
                      <img className="w-4 h-4 cursor-pointer" src="copy2.png" alt="" onClick={() => (copyText(item.password))} />

                    </div>
                  </td>

                  <td className="py-2  border border-white text-center">
                    <span className="cursor-pointer pr-4" onClick={()=> {editPassword(item.id)}}>

                      <lord-icon
                        src="https://cdn.lordicon.com/wuvorxbv.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#000000,secondary:#000000"
                        style={{ width: "25px", height: "25px" }}>
                      </lord-icon>
                      
                    </span>

                    <span className="cursor-pointer" onClick={()=> {deletePassword(item.id)}}>
                      <lord-icon
                        src="https://cdn.lordicon.com/drxwpfop.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#000000,secondary:#000000"
                        style={{ width: "25px", height: "25px" }}>
                      </lord-icon>
                    </span>

                  </td>

                </tr>
              })}

            </tbody>
          </table>
          }
        </div>
      </div>





    </div>
  );
};

export default Manager;
