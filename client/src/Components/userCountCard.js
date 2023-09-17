import React from 'react'

function userCountCard() {
  return (
   <div>
        <div className=' DonationCategoryCard bg-white rounded-lg' style={{width:"150px",height:'auto'}}>
            <div className='svg'>
              <center> <img className='flex justify-center' src={props.imageSrc} width={100} height={100}/> </center>
                <p className='text-center'>{props.categoryname}</p>   
                </div>
        </div>
    </div>
  )
}

export default userCountCard