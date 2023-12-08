import Image from 'next/image';
import { HotelForm } from './form';

export function ImgBanner() {
  return (
    <div className='flex w-screen h-screen '>
      <Image
        src="/images/1-hotel.jpg"
        alt="Hotel banner"
        width={1500}
        height={500}
        className='flex relative mx-auto w-full h-3/4'
      />
      <div className='flex container absolute mx-auto justify-center items-center h-1/2 w-full lg:w-2/3 md:w-5/6 mt-16' >
        <div className=' text-center'>
          <h1 className=' text-yellow-500 md:text-gray-500 lg:text-gray-500 xl:text-gray-500 text-3xl mb-2'>Onde você quer ir?</h1>
          <p className=' text-gray-600'>Escolha o estado e a cidade para achar os melhores resorts.</p>
          <HotelForm />
        </div>

      
        
      </div>
      </div>
  )
}