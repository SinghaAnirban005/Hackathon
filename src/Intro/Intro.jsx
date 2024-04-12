import React from 'react'

function Intro() {
  return (
    <div>
       <div className="flex-col justify-center text-xl items-center m-10">
                  <div className="flex justify-center text-xl items-center">
                  <h1>WELCOME TO THE APPLICATION!!</h1>
                  <h3>HOPE YOU ARE HAVING A GREAT DAY 😊</h3>
                  </div>

                  <div className="flex justify-center text-xl items-center">
                  
                  <ul>
                    <li>
                    STEPS TO USE THE APPLICATION:
                    </li>
                    <li>
                      TAP ONCE ON THE BUTTONS TO MARK YOUSELF AS PRESENT FOR THE CLASS
                    </li>
                    <li>
                      Once Marked present the block would turn green
                    </li>
                    <li>
                      DOUBLE TAP TO MARK YOURSELF AS ABSENT
                    </li>
                    <li>
                      Once marked absent you cannot tap again on the block
                    </li>

                  </ul>
                </div>
                </div>
    </div>
  )
}

export default Intro
