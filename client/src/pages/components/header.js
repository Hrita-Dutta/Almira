import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <>
    {/* Code for Navbar */}
  <div className=' bg-stone-300 '>
    <div className='container mx-auto text-stone-500 py-3  flex justify-between'>
      <div>
        <Image src="/almiraLogo.png" width={200} height={100} ></Image>
      </div>
      <div>
        {/* Code will be added in future */}
      </div>
      <div>
        {/* Code will be added in future */}
      </div>
    </div>
  </div>
    </>
  )
}

export default Header