export function HotelForm() {
  return (
    <div className='mt-7'>
      <form className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
        <select
          name=""
          id=""
          className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'
        >
          <option value="">Escolha o estado</option>
        </select>
        <select
          name=""
          id=""
          className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'
        >
          <option value="">Escolha a cidade</option>
        </select>
        <button className=' col-span-2 lg:col-span-1 text-yellow-900 bg-yellow-500 font-medium rounded px-3 py-2'>
          <svg className='inline-flex items-center w-4 h-4 mr-2' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
          Pesquisar resorts
        </button>
      </form>
    </div>
  )
}