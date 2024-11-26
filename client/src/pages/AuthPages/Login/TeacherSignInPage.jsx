import * as React from "react"
import {Link} from "react-router-dom"

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

const TeacherSignInPage = () => {
  return (
    <div className="bg-[#383854] w-full h-screen flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-3xl font-sans mt-[-100px] mb-5 text-center">login to your teacher dashboard</h1>
    <Card className="w-[350px] bg-[#383854] text-white border-2 border-white">
      <CardHeader>
        <CardTitle className="text-3xl capitalize font-sans mb-1">sign in</CardTitle>
        <CardDescription>sign in to your teacher dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="text-xl">Email</Label>
              <Input id="email" placeholder="email@exmaple.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="text-xl">Password</Label>
              <Input id="password" placeholder="*******" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Link to="/login">
        <Button variant="outline" className="bg-white text-black capitalize">Cancel</Button>
        </Link>
        <Button className="capitalize">sign in</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default TeacherSignInPage