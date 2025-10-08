import React from "react";

export default function SignUp() {
  return (
    <div class="bg-white-100 w-80vw">
      <p>
        Register to get your dream <span class="text-red-400">Scholarship</span>
      </p>
      <div>
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
