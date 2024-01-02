import Image from 'next/image';
import { Link } from 'react-router-dom';

export function LogoHotel() {
  return (
    <Link to={'/'} >
      <Image
      src="/images/SevenHotel.jpg"
      alt='Logo Seven Hotel'
      width={500}
      height={500}
      className='w-36 h-36'
    />
    </Link>
  )
}