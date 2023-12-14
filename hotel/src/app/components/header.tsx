export function HotelHeader() {
  return (
    <div>
      <div className='container mx-auto px-4 h-24 flex items-center'>

        <div className='font-black'>Logo</div>
        
        <ul className='flex ml-auto gap-4 p-9'>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'
          >
            Como reservar
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'
          >
            Sobre nós
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'
          >
            Informações
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer'
          >
            Contato
          </a>
          
      </ul>
    </div>
    </div>
  )
}