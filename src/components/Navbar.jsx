import React from 'react'
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h3 className='text-[18px] font-bold text-(--blue)'>Code Reviewer</h3>
        </div>
        <div className="links">
            <a href="#">History</a>
            <a href="#">Documentation</a>
            <a href="#">Account</a>
        </div>
        <div className="right">
            <button className='right-btn'>Copy Report</button>
            <button className='blue-btn'>Download Code</button>
            <i className='setting-icon'><IoSettingsSharp /></i>
        </div>
    </div>
  )
}

export default Navbar