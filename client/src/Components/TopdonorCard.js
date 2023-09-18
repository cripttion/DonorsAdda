import React from 'react'

function TopdonorCard(props) {
  return (
    <div>
        <div className='w-fit mt-5 ml-5'  style={{width:"fit-content",height:'50px'}}>
            <img src={props.imageUrl} alt='DonorProfile' className='DonorprofileImage'/>
            <p className='text-center text-2xl font-medium mt-2'>{props.name}</p>
        </div>
    </div>
  )
}

export default TopdonorCard