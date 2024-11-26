import * as React from "react"
import {useState} from "react"
import {Link,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = (message="something went wrong") => toast.error(message);


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const StudentSignInPage = () => {

  let navigate = useNavigate();
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      (async ()=>{
        let res = await fetch("http://localhost:4000/student/login",{
          method:"POST",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify({
            email,password
          })
        });
        res = await res.json()
        console.log(res);
        if(res.statusCode == 200){
          const {accessToken,refreshToken} = res?.data
          localStorage.setItem("studentToken",accessToken);
          navigate("/student")
        } else{
          notify(res?.message || "something went wrong")
        }
      })(); 
    }

  return (
    <div className="bg-[#383854] w-full h-screen flex flex-col items-center justify-center gap-4 text-white">
      <ToastContainer />
        <h1 className="text-3xl font-sans mt-[-100px] mb-5 text-center">login to your student dashboard</h1>
    <Card className="w-[350px] bg-[#383854] text-white border-2 border-white">
      <CardHeader>
        <CardTitle className="text-3xl capitalize font-sans mb-1">sign in</CardTitle>
        <CardDescription>sign in to your student dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="text-xl">Email</Label>
              <Input value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }}  id="email" placeholder="email@exmaple.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="text-xl">Password</Label>
              <Input value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }} id="password" placeholder="*******" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Link to="/login">
        <Button variant="outline" className="bg-white text-black capitalize">Cancel</Button>
        </Link>
        <Button className="capitalize" onClick={handleSubmit}>sign in</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default StudentSignInPage