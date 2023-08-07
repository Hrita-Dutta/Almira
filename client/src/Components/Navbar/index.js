import React from 'react'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <>
    {/* Code for Navbar */}
  <div className=' bg-orange-100'>
    <div className='container mx-auto text-stone-500  flex justify-between items-center'>
      <div>
        <Image src="/almiraLogo.png" width={150} height={0} ></Image>
      </div>
      <div className=' '>
        <h1 className=' text-xl'>Navbar</h1>
      </div>
      <div className=''>
        <SearchIcon/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Navbar