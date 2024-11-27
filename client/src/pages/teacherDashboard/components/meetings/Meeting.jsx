import React from 'react'
import MeetingCard from './MeetingCard'
import { FaPlus } from 'react-icons/fa';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CreateMeetingForm from './NewMeetingForm';



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
   <>


   <div className='flex items-center justify-around'>
   <h1 style={{fontFamily:"var(--font-family-manrope)"}} className='text-3xl text-white capitalize px-10 mb-10'>your meetings</h1>
   <button
      className="mb-6 flex items-center px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
    >
      <Dialog>
  <DialogTrigger className='flex items-center'>
  <FaPlus className="mr-2" />
    Create one
    </DialogTrigger>
  <DialogContent className="bg-[#383854] text-white">
    <DialogHeader>
      <DialogTitle>create new meeting</DialogTitle>
      <DialogDescription className="h-[80vh] overflow-scroll">
          <CreateMeetingForm/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </button>
   </div>

   <MeetingCard meeting={meetingData}/>
   <MeetingCard meeting={meetingData}/>
   <MeetingCard meeting={meetingData}/>
   <MeetingCard meeting={meetingData}/>
   </>
  )
}

export default Meeting