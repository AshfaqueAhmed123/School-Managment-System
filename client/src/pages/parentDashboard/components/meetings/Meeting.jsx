import React from 'react'
import MeetingCard from './MeetingCard'

const Meeting = () => {
  return (
    <div>
      <h1 className='text-2xl capitalize px-10 text-white'>your meetings</h1>
      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
    </div>
  )
}

export default Meeting