import React from 'react'
import MeetingCard from './MeetingCard'

const Meeting = () => {

  const meetingData = {
    title: 'Team Sync-up',
    description: 'Discuss project progress and next steps.',
    student : "Ashfaque",
    parent : "qurban ali",
    class : "x",
    date: '2024-12-01',
    time: '10:00 AM',
  }


  return (
    <div>
      <h1 className='text-2xl capitalize px-10 text-white mb-10'>your meetings</h1>
     <MeetingCard meeting={meetingData}/>
     <MeetingCard meeting={meetingData}/>
    </div>
  )
}

export default Meeting