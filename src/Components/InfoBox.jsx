import React from 'react'
import logo from "../assets/logo.png"
import { FaSearch,FaUser } from 'react-icons/fa'

const InfoBox = () => {
  return (
    <main className='bg-gray-200 p-3 rounded-2xl size-40'>
      <img src={logo} alt="pookie-games"  className='w-full'/>
      <div className='flex text-7xl'>
        <span>
          <FaUser/>
        </span>
          
          <span>
    <FaSearch/>
          </span>
      </div>
    </main>
  )
}

export default InfoBox