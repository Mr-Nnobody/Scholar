import React from "react";


export default function Login() {



  return (
    <div class="flex justify-center items-center h-screen">
      <div class="bg-gray-100 w-2/6  rounded p-10">
        <p class="text-center text-xl mb-4">
          Welcome Back to
          <span class="text-red-500 font-bold"> Scholarship</span>
        </p>
        <form class="flex flex-col w-5/6 mx-auto  ">
      
          <input
            name="userName"
            type="text"
            required
            autoComplete="userName"
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            placeholder="Enter Your Name"
          />

          <input
            type="password"
            name="password"
            required
            class="my-2 p-2 rounded focus:outline-none focus:ring-sky-200 focus:ring-2 pl-4 text-lg"
            placeholder=" Enter Your Password"
          />

          <div class=" w-full  my-8  px-4 text-xl ">
            <button type="submit" class="bg-green-400 rounded px-4 py-1">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
