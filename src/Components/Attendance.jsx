import React from 'react'
import { useSelector } from 'react-redux'

function Attendance() {

      const present = useSelector((state) => state.calculator.daysPresent)
      const absent = useSelector((state) => state.calculator.daysAbsent)
      // const days = useSelector((state) => state.calculator.totalDays)

    return( 
      <>
      <div>
        <h2>Total Days this Week: 30</h2>
      </div>
      <div>
        <h2>Days Present: {present}</h2>
      </div>

      <div>
        <h2>Days Absent: {absent}</h2>
      </div>
      </>
    )
}

export default Attendance