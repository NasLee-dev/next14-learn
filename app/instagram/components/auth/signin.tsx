/* eslint-disable @next/next/no-img-element */
'use client'
import { Button, Input } from "@material-tailwind/react"
import { useState } from "react"

export default function Signin({ setView }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex flex-col gap-4">
      <div className="pt-10 pb-6 px-10 w-full flex flex-col items-center justify-center max-w-lg border border-gray-400 bg-white gap-2">
        <img 
          src="/images/inflearngram.png"
          alt="logo"
          className="w-60 mb-6"
        />
        <Input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          className="w-full rounded-sm" 
          onPointerEnterCapture={null} 
          onPointerLeaveCapture={null} 
          crossOrigin={null} 
        />
        <Input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          className="w-full rounded-sm"
          onPointerEnterCapture={null} 
          onPointerLeaveCapture={null} 
          crossOrigin={null} 
        />
        <Button
          onClick={() => console.log('signup')}
          color="light-blue"
          className="w-full text-md py-1" 
          placeholder={null} 
          onPointerEnterCapture={null} 
          onPointerLeaveCapture={null}        
        >
          로그인
        </Button>
      </div>
      <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
        아직 계정이 없으신가요? {" "}
        <button className="text-light-blue-600 font-bold" onClick={() => {
          setView('SIGNIN')
        }}>
          가입하기
        </button>
      </div>
    </div>
  )
}