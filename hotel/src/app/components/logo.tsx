import Image from 'next/image';

export function LogoHotel() {
  return (
    <Image
      src="/images/SevenHotel.jpg"
      alt='Logo Seven Hotel'
      width={500}
      height={500}
      className='w-36 h-36'
    />
  )
}