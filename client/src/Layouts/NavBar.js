import React from 'react'
function NavBar() {
  return (
    <nav>
    <div className='border-b w-full'>
        <header style={{backgroundColor:'white'}}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
    
         <p className='font-bold text-4xl ' style={{color:'rgb(241,90,41)'}}>Donor's Adda</p>
      
    </div>

    <div className="hidden lg:flex lg:gap-x-12">
      
    <button to="#home" className="text-sm  leading-6 text-black">HOME</button>

      <button className="text-sm  leading-6  text-black">NGOs</button>
      <button className="text-sm  leading-6  text-black">Donations</button>
      <button className="text-sm  leading-6  text-black">Donate</button>
      <button className="text-sm  leading-6  text-black">Contact US</button>
      <button className="text-sm  leading-6  text-black">Track</button>




    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    
    <button className='text-black p-2 rounded-xl text-white ' style={{backgroundColor:'rgb(241,90,41)'}}>Login</button>
      {/* <a to="#" className="text-sm font-semibold leading-6 text-gray-900">HIREME <span aria-hidden="true">&rarr;</span></a> */}
    </div>
  </nav>

</header>

    </div>
    </nav>
  )
}

export default NavBar