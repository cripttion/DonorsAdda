import React ,{useEffect}from 'react'
import { Link } from 'react-router-dom'
import { useLoginManager } from '../SateManger/LoginStateManager';
import { CgProfile } from 'react-icons/cg';

function NavBar() {
  const {loginState,loginRole,setLoginSate,setLoginRole,userData,setUserData} = useLoginManager(); 
  //  console.log(loginState);
  //  console.log(loginRole);
  //  console.log(userData);
  //  console.log(userData.Name);
   const Email = localStorage.getItem('Email');
   const Password = localStorage.getItem('password');
   const Role = localStorage.getItem('role');
   const formData={
    Email,
    Password,
    Role
  }
   useEffect(()=>{
   
    async function checkLoginStatus() {
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const responseData = await response.json();
          console.log();
          setLoginSate(true);
          setLoginRole(Role);
          setUserData(responseData.UserData); // Use formData.Role here
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.log('An error occurred:', error);
      }
    }

    checkLoginStatus();
  },[])
  const handleLogout=()=>{
      setLoginSate(false);
      setLoginRole("");
      setUserData([{}]);
      localStorage.clear();

  }
  return (
    <nav>
    <div className='border-b w-full'>
        <header style={{backgroundColor:'white'}}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
    
         <p className='font-bold text-4xl ' style={{color:'rgb(241,90,41)'}}>Donor's Adda</p>
      
    </div>

    <div className="hidden lg:flex lg:gap-x-12">
      
    {loginRole!=="NGOs"&&<Link to="/" className="text-sm  leading-6 text-black">HOME</Link>}
      <Link to='/ngos' className="text-sm  leading-6  text-black">NGOs</Link>
      <Link to='/donations' className="text-sm  leading-6  text-black">Donations</Link>
      {loginRole!=="Receivers" && <Link to='/donate' className="text-sm  leading-6  text-black">Donate</Link>}
      <Link to ='/contactus'className="text-sm  leading-6  text-black">Contact US</Link>
      <Link to='/track' className="text-sm  leading-6  text-black">Track</Link>




    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">
    
    {!loginState&&<Link to='/login' className='text-black p-2 rounded-xl text-white ' style={{backgroundColor:'rgb(241,90,41)'}}>Login</Link>}
    {loginState&&<div className='flex flex-row md:flex-col  items-center'>
     
     <CgProfile />
      <p>{userData.Name}</p>
      
      
      </div>}
      {/* <a to="#" className="text-sm font-semibold leading-6 text-gray-900">HIREME <span aria-hidden="true">&rarr;</span></a> */}
      {loginState&&<button className='text-black p-2 rounded-xl text-white ' style={{backgroundColor:'rgb(241,90,41)'}} onClick={handleLogout}>Logout</button>}

    </div>
  </nav>

</header>

    </div>
    </nav>
  )
}

export default NavBar