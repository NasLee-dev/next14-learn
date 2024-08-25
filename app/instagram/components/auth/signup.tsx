'use client'
/* eslint-disable @next/next/no-img-element */
import { Button, Input } from "@material-tailwind/react"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { createServerSupabaseClient } from "utils/supabase/server"

export default function Signup({ setView }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmationRequired, setConfirmationRequired] = useState(false)

  const supabase = createServerSupabaseClient()

  const signupMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await (await supabase).auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'http://localhost:3000/signup/confirm'
        }
      });
      if (data) {
        setConfirmationRequired(true)
      }
      if (error) {
        alert(error.message)
      }
    }
  })

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
          onClick={() => {
            signupMutation.mutate()
          }}
          color="light-blue"
          className="w-full text-md py-1" 
          disabled={confirmationRequired}
          loading={signupMutation.isPending}
          placeholder={null} 
          onPointerEnterCapture={null} 
          onPointerLeaveCapture={null}        
        >
          {confirmationRequired ? '이메일 확인해주세요' : '가입하기'}
        </Button>
      </div>
      <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
        이미 계정이 있으신가요?{" "}
        <button className="text-light-blue-600 font-bold" onClick={() => {
          setView('SIGNIN')
        }}>
          로그인하기
        </button>
      </div>
    </div>
  )
}