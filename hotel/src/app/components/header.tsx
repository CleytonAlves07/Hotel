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
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer hover:font-bold'
          >
            Como reservar
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer hover:font-bold'
          >
            Sobre nós
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer hover:font-bold'
          >
            Informações
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm font-medium text-gray-600 hover:text-orange-500 hover:underline cursor-pointer hover:font-bold'
          >
            Contato
          </a>
          
      </ul>
    </div>
    </div>
  )
}