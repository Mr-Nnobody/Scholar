import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <div>
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
         
        </div>
        <div>
          <img src="../assets/images/graduating.jpg" alt="graduate photo" width="200px" />
        </div>
      </div>
      <div> banner</div>
    </div>
  );
}
