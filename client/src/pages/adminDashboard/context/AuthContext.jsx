import { createContext, useState } from "react";

export const SidebarContext = createContext({});

export const AuthProvider = ({children}) => {   
    const [isAuthrized,setIsAuthorized] = useState(false)
    const token = localStorage.getItem("adminToken");

    try {
        (async()=>{
          let res = await fetch(`http://localhost:4000/Auth/admin`,{
            method : "GET",
            headers:{
              "Authorization":`Bearer ${token}`
            }
          });
          res = await res.json();
          if(res.success == true){
            setIsAuthorized(true)
          }
        })()
      } catch (error) {
        console.log("some error sending Auth request :-- ",error);
      }

      
}