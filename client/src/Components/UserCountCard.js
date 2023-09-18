import React from 'react'

function UserCountCard(props) {
  return (
   <div>
        <div className=' DonationCategoryCard bg-white rounded-lg p-5 text-center shadow-2xl' style={{width:"150px",height:'100px'}}>
            <div className='svg'>
              <center> <h3 className='text-center font-bold'>{props.number}</h3> </center>
                <p className='text-center mt-5'>{props.name}</p>   
                </div>
        </div>
    </div>
  )
}

export default UserCountCard