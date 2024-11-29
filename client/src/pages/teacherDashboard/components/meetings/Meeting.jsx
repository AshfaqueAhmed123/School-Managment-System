import React,{useState,useEffect} from "react";
import MeetingCard from "./MeetingCard";
import { FaPlus } from "react-icons/fa";
import {v4 as uuidV4} from "uuid"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateMeetingForm from "./NewMeetingForm";

const Meeting = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
      (async ()=>{
        try {
          let res = await fetch("http://localhost:4000/meeting/getAll");
          res = await res.json()
          if(res){
            setMeetings(res?.data)
          }
        } catch (error) {
          console.log(error);
        }
      })()
  }, [meetings]);

  const deleteMeeting = (id) => {
    const confirmation = confirm("this will delete meeting permanently?");
    if(confirmation){
      (async()=>{
        const newMeetings = [];
          meetings.map(meeting => {
            if(meeting.id != id){
                newMeetings.push(meeting)
            }
          })
          setMeetings(newMeetings);
      })()
    }
  }

  return (
    <>
      <div className="flex items-center justify-around">
        <h1
          style={{ fontFamily: "var(--font-family-manrope)" }}
          className="text-3xl text-white capitalize px-10 mb-10"
        >
          your meetings
        </h1>
        <button className="mb-6 flex items-center px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
          <Dialog>
            <DialogTrigger className="flex items-center">
              <FaPlus className="mr-2" />
              Create one
            </DialogTrigger>
            <DialogContent className="bg-[#383854] text-white">
              <DialogHeader>
                <DialogTitle>create new meeting</DialogTitle>
                <DialogDescription className="h-[80vh] overflow-scroll">
                  <CreateMeetingForm />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </button>
      </div>

      {/* <MeetingCard meeting={meetingData} />
      <MeetingCard meeting={meetingData} />
      <MeetingCard meeting={meetingData} />
      <MeetingCard meeting={meetingData} /> */}
      {meetings.map(meeting => <MeetingCard deleteMeeting={deleteMeeting} meeting={meeting} />)}

    </>
  );
};

export default Meeting;
