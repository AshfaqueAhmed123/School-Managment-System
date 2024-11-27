import React from 'react'

const MeetingCard = () => {
  return (
    <div>
         <div>
      <div className="card bg-[#2E2E48] border-2 border-[#475BE8] p-4 m-10 rounded-lg text-white">
        <ul>
        <h2 className='capitalize text-white text-3xl'>meeting with:</h2>
        <li>
        Teacher's name : sir farman
        </li>
        <li>subject : Pakistan Studeis</li>
        <li>class : x (th)</li>
        <li className='text-red-400 text-xl'>schedule time : 1:44pm monday 12/2/2024</li>
        </ul>
        <div className='flex items-center justify-end gap-2'>
          <p>status = </p>
          <button className='px-10 py-4 rounded-[40px] capitalize bg-[#475BE8] transition-all hover:bg-[#475BE8] hover:cursor-not-allowed'>pending</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MeetingCard