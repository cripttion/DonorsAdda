import React,{useState,useEffect} from 'react'
import Layout from './Layouts'
import acc from '../assests/Images/childimg.avif'
import { Link,useNavigate } from 'react-router-dom'
import {AiOutlineArrowRight } from 'react-icons/ai';
let date = new Date().toLocaleDateString();


function Register() {
    const navigate = useNavigate();
    const[Name,setName] = useState("");
    const[Phone,setPhone] = useState("");
    const[Email,setEmail] =useState("");
    const[password,setPassword] = useState("");
    const[AdharCardNo,setAdharnumber] = useState("");
    const[AnonymousDonor,setAnonimity] = useState(false);
    const[Address,setAddress] = useState("");
    const[Date,setDate] = useState("");
    const[donor,setDonor] = useState(false);
    const[receiver,setReceiver] = useState(false);
    const[ngo,setNgo] = useState(false);
    const[Age,setAge] = useState("16");
    const [NgoId,setNgoId] = useState("");
  const handleDonorClick = ()=>{
    if(!donor)
    {
        setDonor(!donor);
        setReceiver(false);
        setNgo(false);
    }
    

  }
  const handleReciverClick  =()=>{
  if(!receiver)
    {
        setDonor(false);
        setReceiver(!receiver);
        setNgo(false);
    }
  }
  const handleNgoClick = () =>{
    if(!ngo)
    {
        setDonor(false);
        setReceiver(false);
        setNgo(!ngo);
    }
  };
let formData;
// Create a formatted date string (e.g., "YYYY-MM-DD")
if(donor){
     formData ={
        Address,
        Phone,
        Date,
        Name,
        Email,
        AdharCardNo,
        password,
        AnonymousDonor,
        
    };
}
if(receiver){
    formData={
        Address,
        Phone,
        Name,
        Email,
        AdharCardNo,
        password,
        Age

    }
}
if(ngo){
  formData={
      Address,
      Phone,
      Name,
      Email,
      AdharCardNo,
      password,
      NgoId

  }
}
let endpoint= '/registerDonor'
if (receiver) {
  endpoint = '/registerDonor/receiver'; // Change endpoint for Receiver
} else if (ngo) {
  endpoint = '/registerDonor/registerNgo'; // Change endpoint for NGO
}
const handlesubmit = async (e) => {
    e.preventDefault();
    setDate(date);
  
   
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Registration successful');
        const responseData = await response.json();
        setAddress('');
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
        setDate('');
        setAdharnumber('');
        if (receiver) {
          setAge('16'); // Reset Age for Receiver
        } else if (ngo) {
          setNgoId(''); // Reset NGO Id for NGO
        }
        alert(`Success: ${JSON.stringify(responseData.message)}`);
        navigate('/login')
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };
  
  return (
    <Layout>
        <div className='flex justify-center items-center  '>
            <div className='bg-white shadow-2xl p-10 w-fit flex flex-col md:flex-row gap-20 rounded-xl mt-20'>
                <div className=''>
                    <img src={acc} width={300} height={400} className='rounded-xl' />
                </div>
                <div className='form flex flex-col items-center '>
                    <h1 className='text-center text-3xl'>Give your hand</h1>
                    <div className='category flex fex-col md:flex-row justify-around gap-10 mt-8'>
                            <button className={`rounded-full text-sm p-1 ${donor?'bg-blue-900 text-white':'bg-white border border-gray-400 text-black'}`}   onClick={handleDonorClick}>Donor</button>
                            <button className={`rounded-full text-sm p-1 ${receiver?'bg-blue-900 text-white':'bg-white border border-gray-400 text-black'}`} onClick={handleReciverClick}>Receiver</button>
                            <button className={`rounded-full text-sm p-1 ${ngo?'bg-blue-900 text-white':'bg-white border border-gray-400 text-black'}`}   onClick={handleNgoClick}>NGOs</button>


                        </div>
                    <form  className='mt-5 md:mt-5 '>
                      
                       <input type='text' value={Name} onChange={(e)=>{setName(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400' placeholder={`${ngo?"NGO Name":"Name"}` } />
                        <input type='email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' placeholder='xyz@gmail.com'  />
                       <input type='text' value={Phone} onChange={(e)=>{setPhone(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400  mt-2' placeholder='+91-7061xxxxx'  />
                       <input type='text' value={AdharCardNo} onChange={(e)=>{setAdharnumber(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' placeholder='Your Adhar-Id'  />
                       <input type='text' value={Address} onChange={(e)=>{setAddress(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' placeholder='Address Line'  />
                       <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' placeholder='*********'  />
                       {receiver&&<input type='text' value={Age} onChange={(e)=>{setAge(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400  mt-2' placeholder='16 years'  />
}
{ngo&&                       <input type='text' value={NgoId} onChange={(e)=>{setNgoId(e.target.value)}} className='w-full rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400  mt-2' placeholder='NGO Id....'  />
}
                       
                       </form>
                       
                       <button type='submit' onClick={handlesubmit} className='text-white rounded-xl w-full p-1 mt-2' style={{backgroundColor:'rgb(241,90,41)'}}>Register as{`${ngo?' NGo':`${receiver?' Receiver':' Donor'}`}`} </button>
                    
                    
                    <Link to='/login' className='text-blue-500  w-full flex flex-row justify-center  mt-5'><p>Old User | Login</p> <AiOutlineArrowRight className='mt-1 ml-5' /></Link>
                </div>
             </div>
             
        </div>
    </Layout>
  )
}   

export default Register