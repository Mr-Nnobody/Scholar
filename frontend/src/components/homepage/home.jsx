import React from "react";
import graduate from "../../assets/images/graduating.jpg"

export default function Home() {
  return (
    <div class=" bg-green-500 h-svh">
      <div class=" flex h-80 bg-red-400 mt-12">
        <div class=" w-1/2 bg-cyan-300 h-full" >
          <p>Win more scholarships with less effort </p>
          <p>
            Simplify and focus your application process with the one-stop
            platform for vetted scholarships.{" "}
          </p>

          <form class="flex flex-col">
            <label htmlFor="DOB">Date of Birth</label>
            <input type="month" placeholder="select your birth month" />
            <label htmlFor="Current school level">Current school level</label>
            <input type="text" name="" id="education" />
            <label htmlFor="Field of study">Field of study</label>
            <input type="text" placeholder="Field of study " />
          </form>

          <button>Check for scholarships </button>
          <button type="button">check</button>
        </div>
        <div class=" w-1/2 h-full">
          <img
            src={graduate}
            alt="graduate's photo"
            width="cover"
          />
        </div>
      </div>
      <div> banner</div>
    </div>
  );
}
