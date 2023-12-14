import Image from 'next/image'
import { HotelHeader } from './components/header'
import { ImgBanner } from './components/banner'
import { ResortsInfo } from './components/resorts'
import { GridResorts } from './components/gridResorts'
import { HotelForm } from './components/form'
import { FooterHotel } from './components/footer'

export default function Home() {
  return (
    <main>
      <HotelHeader />
      <ImgBanner />
      <ResortsInfo />
      <GridResorts />
      <div className='flex justify-center mt-10'>
        <HotelForm />
      </div>
      <FooterHotel />
    </main>

    )
}
