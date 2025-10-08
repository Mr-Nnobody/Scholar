import React from "react";

export default function SignUp() {
  return (
    <div class="bg-gray-100 w-2/5 mx-auto p-10" >
      <p>
        Register to get started with your dream{" "}
        <span class="text-red-400">Scholarship</span>
      </p>
      <div class="flex flex-col w-3/5 mx-auto">
        <input type="text" placeholder="Name..." />
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password..." />
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div>
        <button type="button" onClick={alert("Registration Successful")}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
      <p>
        Already have an account?
        <span class="text-blue-500 font-semibold">Login</span>
      </p>
    </div>
  );
}
