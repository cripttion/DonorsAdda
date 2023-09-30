import React,{useState} from 'react'

function DonatinForm() {

  const [Name, SetProductName] = useState("");
  const [Number,setNumber] = useState("");
  const [Message,setMessage] = useState("");
  const [Category, setCategory] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const Availability = true;
  const Email = localStorage.getItem('Email');
  const UpiId ="";
  const Amount = 0;

  const handleDonateFormSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('Name',Name);
    formData.append('Number',Number);
    formData.append('Email',Email);
    formData.append('Availability',Availability);
    formData.append('Category',Category);
    formData.append('UpiId',UpiId);
    formData.append('Amount',Amount);
    formData.append('Message',Message);
    formData.append('Role',localStorage.getItem('role'));
    
    for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('Images', selectedFiles[i]);
      }

    try {
        const response = await fetch('/addDonation/newdonation',{
            method:'POST',
            body: formData,
        });
        if(response.ok){
            const responseData = await response.json();
            SetProductName('');
            setNumber('');
            setMessage('');
            setSelectedFiles([]);
            
            alert("Donation done Thank you for donating");
        }
        else{
            console.log("Donation failded try again");
        }
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div>
        <div className='bg-white shadow-xl  rounded-xl h-fit p-5'>
            <form onSubmit={handleDonateFormSubmit}>
                <p className='mt-2'>What the thing you want to donate</p>
                <input type='text' value={Name} onChange={(e)=>SetProductName(e.target.value)} placeholder='Name of Object...' className='w-full p-2 rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' />

                <p className='mt-2'>Number of available object</p>
                <input type='number' value={Number} onChange={(e)=>setNumber(e.target.value)} placeholder='Number of Object...' className='w-full p-2 rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' />
            
                <p className='mt-2'>Write some Message</p>
                <textarea type='text' value={Message} onChange={(e)=>setMessage(e.target.value)} rows={5} placeholder='Your Message...' className='w-full p-2 rounded-md border-2 focus:outline-none block border-black p-1 placeholder:text-gray-400 mt-2' />
                
                <p className='mt-2'>Select the Category</p>
                <select value={Category} onChange={(e) => setCategory(e.target.value)} className='w-full p-2 rounded-md border-2 focus:outline-none block border-black p-1 mt-2'>
                    <option value="Hero">Book</option>
                    <option value="Furniture">Food</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accesories">Accesories</option>
 
                </select>

                <p className='mt-4'>Upload Image of the  Object</p>
                <input
                    type="file"
                    name="images"
                    multiple
                    onChange={(e)=>{setSelectedFiles(e.target.files)}}
                /> <br />
               <button type="submit" className='p-2 w-full mt-5 rounded-xl mt-4 text-white roundex-xl' style={{backgroundColor:'rgb(241,90,41)'}}>Upload</button>
            </form>
        </div>
    </div>
  )
}

export default DonatinForm