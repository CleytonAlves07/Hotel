import { Link } from 'react-router-dom';
import { LogoHotel } from './logo';

export function HotelHeader() {
  return (
    <div>
      <div className='container mx-auto px-4 h-24 flex items-center'>

        <div>
          <LogoHotel />
        </div>
        
        <ul className='flex ml-auto gap-4 p-9'>
          <Link
            to={'/'}
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'

          >
            Início
          </Link>
          <Link
            to={'/reservas'}
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'

          >
            Como reservar
          </Link>
          <Link
            to={'/sobrenos'}
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'

          >
            Sobre nós
          </Link>
          <Link
            to={'/info'}
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'

          >
            Informações
          </Link>
          <Link
            to={'/contato'}
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'

          >
            Contatos
          </Link>          
      </ul>
    </div>
    </div>
  )
}