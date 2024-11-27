import React from 'react'
import MeetingCard from './MeetingCard'

const Meeting = () => {
  return (
   <>
   <h1 style={{fontFamily:"var(--font-family-manrope)"}} className='text-3xl text-white capitalize px-10'>your meetings</h1>
   <MeetingCard/>
   <MeetingCard/>
   <MeetingCard/>
   <MeetingCard/>

   </>
  )
}

export default Meeting