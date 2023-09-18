import React from 'react'

function DonationCategoryCard(props) {

  return (
    <div>
        <div className=' DonationCategoryCard bg-white rounded-lg flex flex-row md:flex-col justify-center items-center shadow-2xl' style={{width:"150px",height:'150px'}}>
            <div className='svg '>
              <img className='' src={props.imageUrl} width={100} height={100} style={{mixBlendMode:'darken'}}/>
                
                </div>
                <p className='text-center mt-5 bottom-0'>{props.name}</p>   
        </div>
    </div>
  )
}

export default DonationCategoryCard