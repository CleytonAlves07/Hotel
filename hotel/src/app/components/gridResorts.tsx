import Image from 'next/image';

export function GridResorts() {
  return (
    <div>
      <div className='container mx-auto px-4'>
        <h3 className='mb-8 text-2xl text-center text-gray-400 font-semibold'>Visite outros resorts</h3>

        <div className='grid grid-cols-4 grid-rows-2 gap-6'>
          <div className='relative row-span-2 col-span-2'>
            <div className='absolute text-white bottom-0 pl-4 pb-2 font-semibold'>
              Nannai resort
            </div>
            <Image
              src="/images/4-hotel.jpg"
              alt='Imagem piscina resort'
              width={500}
              height={500}
              className='w-full h-full object-cover rounded-md overflow-hidden shadow-bottom'
            />
          </div>
          <div className='relative col-span-2'>
            <div className='absolute text-white bottom-0 pl-4 pb-2 font-semibold'>
              Maravilha resort
            </div>
            <Image
              src="/images/6-hotel.jpg"
              alt='Imagem piscina resort anoitecer'
              width={500}
              height={500}
              className=' shadow-bottom w-full h-full object-cover rounded-md'
            />
          </div>
          <div className='relative'>
            <div className='absolute text-white bottom-0 pl-4 pb-2 font-semibold'>
              Village resort
            </div>
            <Image
              src="/images/7-hotel.jpg"
              alt='Imagem piscina e montanhas'
              width={500}
              height={500}
              className=' shadow-bottom w-full h-full object-cover rounded-md'
            />
          </div>
          <div className='relative'>
            <div className='absolute text-white bottom-0 pl-2 pb-2 font-semibold'>
              SummerVille resort
            </div>
            <Image
              src="/images/8-hotel.jpg"
              alt='Imagem bangalô amanhecer'
              width={500}
              height={500}
              className=' shadow-bottom w-full h-full object-cover rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  )
}