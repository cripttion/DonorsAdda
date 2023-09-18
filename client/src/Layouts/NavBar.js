import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginManager } from '../SateManger/LoginStateManager';

function NavBar() {
  const {loginState,loginRole,setLoginSate,setLoginRole,userData,setUserData} = useLoginManager(); 
   console.log(loginState);
   console.log(loginRole);
   console.log(userData);
   console.log(userData.Name);
  return (
    <nav>
    <div className='border-b w-full'>
        <header style={{backgroundColor:'white'}}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
    
         <p className='font-bold text-4xl ' style={{color:'rgb(241,90,41)'}}>Donor's Adda</p>
      
    </div>

    <div className="hidden lg:flex lg:gap-x-12">
      
    <Link to="/" className="text-sm  leading-6 text-black">HOME</Link>
     
      <Link to='/ngos' className="text-sm  leading-6  text-black">NGOs</Link>
      <Link to='/donations' className="text-sm  leading-6  text-black">Donations</Link>
      <Link to='/donate' className="text-sm  leading-6  text-black">Donate</Link>
      <Link to ='/contactus'className="text-sm  leading-6  text-black">Contact US</Link>
      <Link to='/track' className="text-sm  leading-6  text-black">Track</Link>




    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    
    {!loginState&&<Link to='/login' className='text-black p-2 rounded-xl text-white ' style={{backgroundColor:'rgb(241,90,41)'}}>Login</Link>}
    {loginState&&<p className='text-black p-2 rounded-xl text-white ' style={{backgroundColor:'rgb(241,90,41)'}}>{userData.name}</p>}
      {/* <a to="#" className="text-sm font-semibold leading-6 text-gray-900">HIREME <span aria-hidden="true">&rarr;</span></a> */}
    </div>
  </nav>

</header>

    </div>
    </nav>
  )
}

export default NavBar