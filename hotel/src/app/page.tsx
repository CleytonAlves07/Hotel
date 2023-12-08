import Image from 'next/image'
import { HotelHeader } from './components/header'
import { ImgBanner } from './components/banner'

export default function Home() {
  return (
    <main className='bg-gray-50'>
      <HotelHeader />
      <ImgBanner />

    </main>

    )
}
