import React,{useState,useEffect} from 'react'
import Layouts from '../Layouts/Layouts';
import DonateNowCard from '../Components/DonateNowCard';
import Designertitle from '../Components/Designertitle';
import { useLoginManager } from '../SateManger/LoginStateManager';
import cloth from '../assests/svg/cloth.avif'
import temporaryQr from '../assests/Images/tempoary.png'
import food from '../assests/svg/food.avif'
import bookSvg from '../assests/svg/mobile-book.svg'
import accesoris from '../assests/svg/acces.avif';
import DonationCategoryCard from '../Components/DonationCategoryCard'
import DonatinForm from '../Components/DonatinForm';
import imageNotFound from '../assests/Images/imageNotFound.png';
function Donate() {
  const {loginState,loginRole,setLoginSate,setLoginRole,userData,setUserData} = useLoginManager(); 
  const userName = userData.Name; 
  const titleBackStirng = "THNAK YOU " +(userData.Name===undefined?"":userData.Name);
  const [trackingData, setTrackingData] = useState([{}]);
  const [dontedData,setDonatedData] = useState([]);
  const[handleSectionClicks,setHandleSectionClick] = useState(false);
  useEffect(() => {
    // Fetch all tracking details from your API using the fetch API
   fetch('/allcampignDetails')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // const donatedObjects = data.map((tracking) => tracking.DonatedObjects);
        
        setTrackingData(data);
        console.log(data);
        const donatedObjects = data.map((trcking) => trcking.DonatedObjects);
        setDonatedData(donatedObjects);
      })
      .catch((error) => {
        console.error('Error fetching all tracking details:', error);
      });
  }, []);
 
  const handleUploadSuccess = (newData) => {
   
    setDonatedData((prevData) => [...prevData, newData]);
  };

  const handleSectionClick =()=>{
   setHandleSectionClick(true);
  };
  return (
   
   <Layouts>
    <div>  
    <h2 className='text-5xl text-center mt-4'>Please Contribute For  ❤️</h2> 
     <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mx-10 '>
      
       <div className='donateNowCard  md:col-span-2 grid grid-col-1 md:grid-cols-3 gap-5 border-r-4 border-red'>
        {dontedData.map((tracking)=>(
       <div> 
       <DonateNowCard
          userName={userName}
          imageUrl={
            tracking.Images.length>0
              ? `data:image/jpeg;base64,${tracking.Images[0].imgdata}`
              :  'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/106897EA.jpg&w=500&zc=1'
          }
          
          Name={tracking.Name}
          Message ={tracking.Message}
          
        />
    </div>
        ))}
  
       </div>
       <div className='DonationList bg-gray-400 rounded-xl p-2'>
           <h2 className='text-center text-3xl underline text-white'>Select what you want to donate</h2>
           {!handleSectionClicks&&<div className='flex flex-col md:flex-col justify-center items-center gap-2 md:gap-10 mt-10 max-w-screen'>
      <button onClick={handleSectionClick}>
        <DonationCategoryCard
        imageUrl={bookSvg}
        name="BOOKS"
      /></button>

        <button onClick={handleSectionClick}>
          <DonationCategoryCard
        imageUrl={food}
        name="FOODS"
      /></button>
      <button onClick={handleSectionClick}>        
      <DonationCategoryCard
        imageUrl={cloth}
        name="CLOTHES"
      /></button>
      <button onClick={handleSectionClick}>
        <DonationCategoryCard
        imageUrl={accesoris}
        name="Accesories"
      /></button>
    </div>}
{handleSectionClicks&&<div className='p-2'>
    <DonatinForm onUploadSuccess={handleUploadSuccess} />
  </div>}
       </div>
     </div>
        <Designertitle
          title="Your Donations"
          titleBack={titleBackStirng}
        />
     </div>

   </Layouts>
    
  )
}

export default Donate