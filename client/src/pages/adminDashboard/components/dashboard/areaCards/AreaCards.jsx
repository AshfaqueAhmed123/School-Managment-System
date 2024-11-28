import { useState,useEffect } from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";


const AreaCards = () => {
  const [allTeachers,setAllTeachers] = useState(0)
  const [allStudents,setAllStudents] = useState(0)
  const [AllNonScademicStaff,setAllNonAcademicStaff] = useState(0)


  // apis calls for data

  useEffect(() => {
    let allteachers;  
  (async ()=>{
   try {
      let res = await fetch(
        "http://localhost:4000/teacher/allTeachers",
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
       setAllTeachers(res?.num || 0)
       console.log(res?.num);
       
      }
   } catch (error) {
    console.log(error);
   }
  })()
  
  // setAllTeachers(allteachers)


  }, []);

  useEffect(() => {
    let allstudents;
    
     (async ()=>{
   try {
      let res = await fetch(
        "http://localhost:4000/student/allStudents",
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
        console.log("student",res);
        
       setAllStudents(res?.num || 0)
       console.log(res?.num);
       allstudents = res?.num;
      }
   } catch (error) {
    console.log(error);
   }
  })()

  // setAllStudents(allstudents)
  }, []);


  return (
    <section className="content-area-cards">
      <AreaCard
        name="teacher"
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "All Teachers",
          value: `${allTeachers} = Teachers`,
          text: "total teachers in our college",
        }}
      />
      <AreaCard
        name="student"
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "All Students",
          value: `${allStudents} = students`,
          text: "total students in our college",
        }}
      />
      <AreaCard
        name="nonAcademicStaff"
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Non-Academic Staff",
          value: `${AllNonScademicStaff} = peoples`,
          text: "total non-academic staff in our college",
        }}
      />
    </section>
  );
};

export default AreaCards;
