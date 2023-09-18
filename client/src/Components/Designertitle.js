import React from 'react'

function Designertitle(props) {
  return (
    <div className='text-neutral-900'>
         <div className='AboutHeading flex justify-center '>
          <div className='aboutFront text-1xl md:text-3xl  bold  relative z-0 mt-2' ><p className='border-b-2 border-orange-700 '>{props.title}</p></div>
          <div className='aboutBack  absolute text-3xl md:text-6xl text-slate-600 -z-10 opacity-25'><p>{props.titleBack}</p></div>
        </div>
    </div>
  )
}

export default Designertitle