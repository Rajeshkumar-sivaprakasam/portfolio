import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc';
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav' >
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FcAbout />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <MdOutlineMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <GrContact /></a>
    </nav >
  )
}

export default Nav