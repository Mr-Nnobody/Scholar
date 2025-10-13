import React from "react";

export default function SignUp() {

// const handleSubmit = onclick{

// }

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
            placeholder="Enter Your Name"
          />
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="email"
            placeholder="Enter YourEmail"
          />
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="password"
            placeholder=" Enter Your Password"
          />
          <input
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            type="password"
            placeholder="Confirm Password"
          /> <div class="flex w-full mx-auto my-8 justify-between px-4 text-xl ">
          <button type="button" class="px-4 py-1 rounded bg-yellow-300">
            Cancel
          </button>
          <button type="submit" class="bg-green-400 rounded px-4 py-1">
            Submit
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
