import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc';
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
const Nav = () => {
  return (
    <nav>
      <a href=""><AiOutlineHome /></a>
      <a href="#about"><FcAbout /></a>
      <a href="#experience"><AiOutlineBook /></a>
      <a href="#services"><MdOutlineMiscellaneousServices /></a>
      <a href="#contact"><GrContact /></a>
    </nav>
  )
}

export default Nav