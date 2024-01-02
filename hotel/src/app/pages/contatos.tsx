import React from 'react'
import { HotelHeader } from '../components/header'
import { SocialIcons } from '../components/socialIcons'

export default function Contatos() {
  return (
    <div>
      <HotelHeader />
      <div className=' flex-col justify-center text-center items-center mt-10'>
        <div className=' font-semibold text-gray-500 mb-4 text-lg'>Contatos </div>
        <div className=' flex justify-center text-center items-center' ><SocialIcons/></div>
      </div>
    </div>
  )
}
