import React from 'react'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <>
    {/* Code for Navbar */}
  <div className=' bg-gray-300 '>
    <div className='container mx-auto text-stone-500 py-3 flex justify-between'>
      <div>
        <Image src="/almiraLogo.png" width={150} height={0} ></Image>
      </div>
      <div className=' py-3'>
        <h1>Navbar</h1>
      </div>
      <div className='py-3'>
        <SearchIcon/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Navbar