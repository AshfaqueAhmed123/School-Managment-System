import React, { useState,useEffect } from 'react';
import CreateNewClassForm from "./CreateNewClassForm"

import { FaPlus } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Loader  from "@/./Loader";


const ClassTable = () => {
  // Dummy teacher data
  const [classes, setClasses] = useState([
        
  ]);

  useEffect(() => {
    (async ()=>{
      try {
        let res = await fetch(
          "http://localhost:4000/class/getAllClasses",
          {
            method:"GET",
            headers:{
              "content-type":"application/json",
              "Authorization":`Bearer ${localStorage.getItem  ("AdminToken")}`
            }
          }
        )
        res = await res.json();
        if(res){
          console.log(res);
         setClasses(res?.data?.classes || [])
        }
        
      } catch (error) {
        console.log(error);
      }
    })()
    
  }, []);

  // Function to handle the deletion of a teacher
  const DeleteClass = (index) => {
    const updatedClasses = classes.filter((_, i) => i !== index);
    setClasses(updatedClasses);
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-[#475BE8] text-white rounded-lg hover:bg-blue-600 focus:outline-none">
        <Dialog>
            <DialogTrigger className="flex items-center">
              <FaPlus className="mr-2" />
              Create Class
            </DialogTrigger>
            <DialogContent className="bg-[#383854] text-white">
              <DialogHeader>
                <DialogTitle className="mb-3 mx-3">Create New Class</DialogTitle>
                <DialogDescription className="h-[80vh] overflow-scroll">
                    <CreateNewClassForm/>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#2E2E48] p-6 rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#2E2E48] text-white">
            <tr className='border-2 border-white p-2'>
              <th className="px-6 py-3 text-left text-xl font-medium">Class</th>
              <th className="px-6 py-3 text-left text-xl font-medium">Class Teacher</th>
              <th className="px-6 py-3 text-left text-xl font-medium">Total students</th>
              <th className="px-6 py-3 text-left text-xl font-medium">Actions</th> {/* New Column for Delete */}
            </tr>
          </thead>
          <tbody className="bg-[#2E2E48] text-white">
          {classes.length == 0 ? <Loader/> : ""}
            {classes.map((Class, index) => (
              <tr key={index} className="hover:bg-[#383854]">
                <td className="px-6 py-4 text-sm font-medium">{Class.class}</td>
                <td className="px-6 py-4 text-sm">{Class.teacher}</td>
                <td className="px-6 py-4 text-sm">{Class.class}</td>
                <td className="px-6 py-4 text-sm text-center">
                  {/* Delete Button */}
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                    onClick={() => DeleteClass(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassTable;
