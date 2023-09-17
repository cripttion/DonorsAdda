import React from 'react'

function Designertitle(props) {
  return (
    <div className='text-neutral-900'>
         <div className='AboutHeading flex justify-center '>
          <div className='aboutFront text-5xl mt-3 bold  relative z-0'><p className='border-b-8 border-orange-700  p-4'>{props.title}</p></div>
          <div className='aboutBack  absolute text-9xl text-slate-600 -z-10 opacity-25 '><p>{props.titleBack}</p></div>
        </div>
    </div>
  )
}

export default Designertitle