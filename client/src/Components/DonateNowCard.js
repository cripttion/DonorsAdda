import React,{useState,useEffect} from 'react'
import { QRCode } from 'react-qrcode-logo';
function DonateNowCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2,setIsClicked2] = useState(false);
  const [thankyou,setThankMessage] = useState("");
  const [amount,setAmount] = useState(0);
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
        setIsClicked2(false);
        setThankMessage("Thankyou! If you paid, you'll get a notification on your Email in sometime.");

        setTimeout(() => {
          setThankMessage('');
        }, 100000);
      }, 100000);

      // Clean up the timer when the component unmounts or when the effect runs again
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClick2 = () => {
    setIsClicked2(true);
  };

  return (
    <div  className=''>
      
      {(isClicked&&!isClicked2)&&<div className='flex flex-col justify-center items-center bg-white shadow-xl max-w-xs p-2 rounded-md'>
        <h1 className='text-2xl font-bold'>HEY! {props.userName}</h1>
        <label>Enter amount you want to contribute</label>
        <input  className="focus:outline-none border-2 border-black rounded-xl mt-2 p-1" type='number' onChange={(e)=>setAmount(e.target.value)} />    
        <button onClick={handleClick2} className='p-2  rounded-xl mt-4 text-white roundex-xl' style={{backgroundColor:'rgb(241,90,41)'}}>
           Generate QR
        </button>
        </div>}
      {
        isClicked2&&
        <div  className='flex flex-col justify-center items-center bg-white shadow-xl max-w-xs p-2 rounded-md'>
        <QRCode
        value={`upi://pay?pa=${props.upiId}&pn=Crittion&tn=cftrhwetaw4gta&am=${amount}`}
        size="300"
        // logoImage="https://i.postimg.cc/5tdHfkxF/118852864-1241633666213183-4722008391193475906-n.png"
        logoWidth="80"
        logoHeight="100"
        logoOpacity="0.6"
      />
          <p className='mt-2 text-cener'>Scan and Pay Now</p>
        </div>
      }
      
      {!isClicked&&
      <div className='flex flex-col justify-center items-center bg-white shadow-xl max-w-xs p-2 rounded-md' >
          <p className='text-green-500 text-justify font-semibold'>{thankyou}</p>
          <div className='img'>
          <img src={props.imageUrl} width={200} height={200} className='shadow-3xl border-2 border-gray-300' />
          </div>
          <p className='mt-2 font-bold'>{props.Name} is collection Donations</p>
          <p className='text-justify p-2 mt-2 bg-gray-600 text-white rounded-sm'>{props.Message}</p>
          <p className='mt-2'>Tracking Id:- {props.trackingId}</p>

          <button onClick={handleClick} className='p-2  rounded-xl mt-4 text-white roundex-xl' style={{backgroundColor:'rgb(241,90,41)'}}>
            Donate Now
          </button>
      </div>
       }
    </div>
  )
}

export default DonateNowCard