import Image from 'next/image';
import { HotelForm } from './form';

export function ImgBanner() {
  return (
    <div className='flex w-screen h-screen justify-center '>
      <Image
        src="/images/13-hotel.jpg"
        alt="Hotel banner"
        width={1500}
        height={500}
        className='flex relative mx-auto w-full h-3/4'
      />
      <div className='flex container absolute mx-auto justify-center items-center h-1/2 w-full lg:w-2/3 md:w-5/6 mt-2' >
        <div className=' text-center'>
          <div>
            <h1 className=' text-gray-200  text-3xl font-semibold mb-2'>Onde vamos?</h1>
          <p className=' text-gray-100 font-semibold text-sx'>Escolha o estado e a cidade para achar os melhores resorts.</p>
          </div>
          <HotelForm />
        </div>

      
        
      </div>
      </div>
  )
}