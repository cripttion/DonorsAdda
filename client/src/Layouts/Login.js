import React,{useState,useEffect} from 'react'
import Layout from './Layouts'
import acc from '../assests/Images/childimg.avif'
import { Link ,useNavigate} from 'react-router-dom'
import {AiOutlineArrowRight } from 'react-icons/ai';
import { useLoginManager } from '../SateManger/LoginStateManager';
function Login() {
    const navigate = useNavigate();
    const[Email,setEmail] =useState("");
    const[Password,setPassword] = useState("");
    const[Role,setRole] = useState("");
    
    const {loginState,loginRole,setLoginSate,setLoginRole,userData,setUserData} = useLoginManager(); 
     const handleRoleClick = (selectedRole) => {
        setRole(selectedRole);
        
      };
  const handlesubmit= async (e)=>{
    e.preventDefault();
   const formData={
     Email,
     Password,
     Role
   }
   console.log(formData)
    try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('Registration successful');
          const responseData = await response.json();
          
          setEmail('');
          setPassword('');
          setRole('')
          alert(`Success: ${JSON.stringify(responseData.message)}`);
          setUserData(responseData.UserData);
          console.log(responseData.UserData);
          console.log(userData);
          setLoginSate(true);
          setLoginRole(Role);
          navigate('/')
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.log('An error occurred:', error);
      }

    console.log(formData);
  }
  return (
    <Layout>
        <div className='flex justify-center items-center  '>
            <div className='bg-white shadow-2xl p-10 w-fit flex flex-col md:flex-row gap-20 rounded-xl mt-20'>
                <div className=''>
                    <img src={acc} width={300} height={400} className='rounded-xl' />
                </div>
                <div className='form flex flex-col items-center '>
                    <h1 className='text-center text-3xl'>LOGIN</h1>
                    <div className='category flex fex-col md:flex-row justify-around gap-10 mt-8'>
                            <button  onClick={() => handleRoleClick('Donor')} className={`rounded-full text-sm p-1 ${Role==='Donor'?'bg-blue-900 text-white':'bg-white border border-gray-400 text-black'}`} >Donor</button>
                            <button  onClick={() => handleRoleClick('Receivers')} className={`rounded-full text-sm p-1 ${Role==='Receivers'?'bg-blue-900 text-white':'bg-white border border-gray-400 text-black'}`} >Receiver</button>
                            <button  onClick={() => handleRoleClick('NGOs')} className={`rounded-full text-sm p-1 ${Role==='NGOs'?'bg-blue-900 text-white':'bg-white border border-gray-400 text-black'}`}   >NGOs</button>


                        </div>
                    <form onSubmit={handlesubmit} className='mt-5 md:mt-10 '>
                      
                       <input type='email' onChange={(e)=>{setEmail(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400' placeholder='xyz@gamil.com'  />
                       <input type='password' onChange={(e)=>{setPassword(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' placeholder='**********'  />
                       
                       <button type='submit' className='text-white rounded-xl w-full p-1 mt-2' style={{backgroundColor:'rgb(241,90,41)'}}>Login  </button>
                    </form>
                    <div className='flex justify-end'>
                          <Link to='/forgotpassword' className='text-blue-500 underline text-sm mt-3'>Forgot password?</Link>
                       </div>
                    <Link to='/register' className='text-white p-2 rounded-xl w-full flex flex-row justify-center mt-32 ' style={{backgroundColor:'rgb(241,90,41)'}}><p>New user | Register</p> <AiOutlineArrowRight className='mt-1 ml-5' /></Link>
                </div>
             </div>
             
        </div>
    </Layout>
  )
}   

export default Login