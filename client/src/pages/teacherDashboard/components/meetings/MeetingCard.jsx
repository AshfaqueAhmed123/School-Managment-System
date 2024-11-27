import React from 'react'

const MeetingCard = () => {
  return (
    <div>
      <div>
      <div className="card bg-[#2E2E48] border-2 border-[#475BE8] p-4 m-10 rounded-lg text-white" style={{fontFamily:"var(--font-family-manrope)"}}>
        <ul>
        <h2 className='capitalize text-white text-3xl'>meeting with:</h2>
        <li>
        student's parent : Qurban Ali
        </li>
        <li>student : Ashfaque</li>
        <li>class : x (th)</li>
        <li className='text-red-400 text-xl'>schedule time : 1:44pm monday 12/2/2024</li>
        </ul>
        <div className='flex items-center justify-end gap-10'>
          <button className='px-10 py-4 rounded-[40px] capitalize bg-orange-700 transition-all hover:bg-orange-800'>delete</button>
          <button className='px-10 py-4 rounded-[40px] capitalize bg-green-700 transition-all hover:bg-green-800'>start</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MeetingCard