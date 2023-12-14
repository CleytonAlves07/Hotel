import { SocialIcons } from './socialIcons';

export function FooterHotel() {
  return (
    <div className=' border-t-2 border-gray-200 mt-20 flex h-24'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <div className=' font-black '>
          Logo
        </div>
        <SocialIcons />
      </div>
    </div>
  )
}