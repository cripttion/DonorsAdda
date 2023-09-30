import React,{useState} from 'react'
import Layout from '../Layouts/Layouts'

function CreateCampignForm() {
    const [Amount,SetAmount] = useState("");
    const[upiId,setUpiId] = useState("");
    const[message,setMessage] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('Amount',Amount);
        formData.append('Message',message);
        formData.append('UpiId',upiId);
        formData.append('Role',localStorage.getItem('role'));
        formData.append('Email',localStorage.getItem('Email'))
        for(let i = 0;i<selectedFiles.length;i++)
        {
            formData.append('Images',selectedFiles[i]);
        }

        try{
            const response = await fetch('/addDonation/newdonation',{
                method:'POST',
                body:formData,
            });
            if(response.ok)
            {
                const responseData = await response.json();
                SetAmount('');
                setMessage('');
                setUpiId('');

                alert("Campign published check on the Donations page");
            }
            else{
                console.log("Campign publication failed");
            }
        }catch(error)
        {
            console.log(error);
        }
    }

  return (
   
    <Layout>
        <div className='flex flex-col gap-10 mt-10  justify-center items-center'>
            <form onSubmit={handleSubmit} className="bg-white shadow-xl p-5 w-1/2">
            <p>
                Amout we are rising
            </p>
            <input value={Amount} onChange={(e)=>SetAmount(e.target.value)} type='text' className='w-full mt-5 p-2 border focus:outline-none'  placeholder='Enter amount'/>
            <p className='mt-5'>
                Enter UPI-Id for Donation receving
            </p>
            <input type='text' value={upiId} onChange={(e)=>setUpiId(e.target.value)} className='w-full mt-5 p-2 border focus:outline-none'  placeholder='Enter UpiId'/>
            <p className='mt-5'>
                About the Campign
            </p>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5} className=' w-full mt-5 border focus:outline-none p-2 ' placeholder='Type here ...'></textarea>
            <p className='mt-5'>
                Select Images which support our Campign
            </p>
            <input type='file' name="images"
                    multiple
                    onChange={(e)=>{setSelectedFiles(e.target.files)}} className='mt-5' />
            <button type="submit" className='p-2 w-full mt-5 rounded-xl mt-4 text-white roundex-xl' style={{backgroundColor:'rgb(241,90,41)'}}>Publish campign</button>
            </form>
        </div>
    </Layout>
  )
}

export default CreateCampignForm