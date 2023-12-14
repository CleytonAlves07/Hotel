import { MoveRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function ResortsInfo() {
  return (
    <div className='text-gray-600'>
      <div className='container mx-auto px-4 py-10 bg-red-50 rounded-sm mb-6'>
        <div className='flex'>
          <div className='pr-10'>
            <h4 className='text-sm text-gray-400 font-medium'>Resort em Destaque</h4>
            <h2 className=' text-2xl text-gray-500'>Resort Nannai - Porto de Galinhas</h2>
            <div className='flex space-x-2'>
              <h6 className='text-sm text-gray-400 font-medium mt-2'>Classificação - 5 estrelas</h6>
              <Sparkles className=' text-yellow-500 w-4' />
            </div>
            <div className='text-sm text-gray-400 font-medium mt-4'>
              <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae doloribus ipsa, provident excepturi explicabo voluptatum quisquam minima quae expedita, voluptate voluptas, ratione deleniti iusto dolor? Repellat cum expedita necessitatibus doloremque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, doloremque? Ipsum ratione quas quibusdam alias voluptates reprehenderit qui id molestias quidem illum. Veritatis labore aperiam quaerat similique, totam optio nihil!</p>
            </div>
            
            <div className='mt-4 w-48'>
              <a
                className='flex text-yellow-900 bg-yellow-500 font-medium rounded px-3 py-2'
                href="https://www.getinapp.com.br/ipojuca/nannai-resort-spa" target="_blank" >
                Solicitar reserva
              <MoveRight className='ml-3' />
              </a>
              </div>
          </div>



          <div className='ml-auto min-w-fit'>
            <Image
              src="/images/9-hotel.jpg"
              alt='Imagem cabanas resort'
              width={500}
              height={500}
              className='rounded-md '
            />
        </div>
        </div>
      </div>
    </div>
  )
}