import Image from 'next/image'
import { HotelHeader } from './components/header'
import { ImgBanner } from './components/banner'
import { SocialIcons } from './components/socialIcons'
import { ResortsInfo } from './components/resorts'
import { GridResorts } from './components/gridResorts'

export default function Home() {
  return (
    <main className='bg-gray-50'>
      <HotelHeader />
      <ImgBanner />
      <ResortsInfo />
      <GridResorts />
      <SocialIcons />
    </main>

    )
}
