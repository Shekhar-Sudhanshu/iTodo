import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between bg-black text-white p-5">
            <div className="logo">
                <h2 className='text-2xl cursor-pointer'>iTodo</h2>
            </div>
            <nav>
                <ul className='flex gap-10 p-1'>
                    <NavLink to="/" className='cursor-pointer hover:font-bold'>Home</NavLink>
                    <NavLink to="/about" className='cursor-pointer hover:font-bold'>About</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar