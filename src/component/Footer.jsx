import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 p-2 md:p-0 w-full md:static text-white flex flex-col justify-center items-center'>
            <div className="logo font-bold text-2xl">
                <span className="text-green-500"> &lt;</span>
                Pass
                <span className="text-green-500">OP&gt;</span>
            </div>
            <div className='flex justify-center items-center'>
                Created with <img className='w-7 mx-2' src="heart.png" alt="" /> by Abhishek Kashyap
            </div>
        </div>
    )
}

export default Footer
