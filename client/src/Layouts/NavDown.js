import React from 'react'
import { AiFillInstagram,AiFillLinkedin,AiOutlineWhatsApp,AiOutlineMail } from 'react-icons/ai';
function NavDown() {
  return (
    <div className='bg-black'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-56 mx-40 mx-5 md:mx-20 mt-40'>
            <div className='mt-10'><p className='font-bold text-4xl ' style={{color:'rgb(241,90,41)'}}>Donor's Adda</p>
            <p className='text-white mt-2'>Contact US</p>
            <div className='flex flex-row gap-5 text-2xl mt-5 justify-center items-center '>
               <div className='insta text-white border border-gray p-2 rounded-xl'><AiFillInstagram /></div>
               <div className='Linkedin text-white border border-gray p-2 rounded-xl'><AiFillLinkedin /></div>
               <div className='WhatsApp text-white border border-gray p-2 rounded-xl'><AiOutlineWhatsApp/></div>
               <div className='mail text-white border border-gray p-2 rounded-xl'><AiOutlineMail/></div>
                
            </div>
        </div>
        <div className='flex flex-row md:flex-row text-gray-600 mt-20 gap-5 md:gap-40' >
            <div>
              <ul>
                <li>Home</li>
                <li>Donate</li>
                <li>Donors</li>
                <li>Volunteers</li>
                <li>NGOs</li>
                <li>Admin</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Term & condition</li>
                <li>Career</li>
                <li>ContactUs</li>
                <li>Locations</li>
                
              </ul>
            </div>
        </div>
        </div>
        <p className='text-white text-center mt-20'>MADE TO SPREAD ❤️ BY CRIPTTION</p>
        <p className='text-center text-gray-700'>copyright  &copy; reserved to NexT-INn </p>
    </div>
  )
}

export default NavDown