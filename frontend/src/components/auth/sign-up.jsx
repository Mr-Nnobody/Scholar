
import React, { useState }  from "react";

export default function SignUp() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit =  (e) => {
  e.preventDefault()

  console.log(`userName: ${name} email: ${email} password: ${password}`)
// API call to backend 
  
}

  return (
    <div class="flex justify-center items-center h-screen">
      
      <div class="bg-gray-100 w-2/6  rounded p-10">
        <p class="text-center text-xl mb-4">
          Register to get started with your dream{" "}
          <span class="text-red-500 font-bold">Scholarship</span>
        </p>
        <form class="flex flex-col w-5/6 mx-auto  ">
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="text"
            name="userName"
            value={name}
            onChange={(e)=> {setName(e.target.value)}}
            required
            placeholder="Enter Your Name"
          />
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="email"
            name="userEmail"
            autoComplete="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            required
            placeholder="Enter YourEmail"
            />
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="password"
            name="password"
            minLength={8}
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            required
            placeholder=" Enter Your Password"
          /> 
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="password"
            required
            placeholder="Confirm Password"
          /> <div class=" w-full  my-8  px-4 text-xl ">
          
          <button type="submit" class="bg-green-400 rounded px-4 py-1" onClick={handleSubmit}>
            Register Now
          </button>
        </div>
        </ form>
       
        <p class="w-3/4 text-lg mx-auto ">
          Already have an account?
          <span class="text-blue-500 font-semibold">Login</span>
        </p>
      </div>
    </div>
  );
}
