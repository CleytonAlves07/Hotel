import Image from 'next/image'
import { HotelHeader } from './components/header'
import { ImgBanner } from './components/banner'
import { SocialIcons } from './components/socialIcons'
import { ResortsInfo } from './components/resorts'
import { GridResorts } from './components/gridResorts'
import { HotelForm } from './components/form'

export default function Home() {
  return (
    <main className='bg-gray-50'>
      <HotelHeader />
      <ImgBanner />
      <ResortsInfo />
      <GridResorts />
      <div className='flex justify-center mt-10'>
        <HotelForm />
      </div>
      <SocialIcons />
    </main>

    )
}
