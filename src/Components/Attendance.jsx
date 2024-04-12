import React from 'react'
import { useSelector } from 'react-redux'

function Attendance() {

      const present = useSelector((state) => state.calculator.daysPresent)
      const absent = useSelector((state) => state.calculator.daysAbsent)
      const percentage = useSelector((state) => state.calculator.percentage)

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

      <div>
        <h2>Percentage Calculation: {percentage}</h2>
      </div>
      </>
    )
}

export default Attendance


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// function Attendance() {
//     const present = useSelector((state) => state.calculator.daysPresent);
//     const absent = useSelector((state) => state.calculator.daysAbsent);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         // Retrieve values from localStorage on component mount
//         const storedDaysPresent = localStorage.getItem('daysPresent');
//         const storedDaysAbsent = localStorage.getItem('daysAbsent');

//         // Update Redux store if values are found in localStorage
//         if (storedDaysPresent !== null) {
//             dispatch({ type: 'SET_DAYS_PRESENT', payload: parseInt(storedDaysPresent) });
//         }
//         if (storedDaysAbsent !== null) {
//             dispatch({ type: 'SET_DAYS_ABSENT', payload: parseInt(storedDaysAbsent) });
//         }
//     }, [dispatch]);

//     // Update localStorage whenever present or absent change
//     useEffect(() => {
//         localStorage.setItem('daysPresent', present.toString());
//     }, [present]);

//     useEffect(() => {
//         localStorage.setItem('daysAbsent', absent.toString());
//     }, [absent]);

//     return (
//         <>
//             <div>
//                 <h2>Total Days this Week: 30</h2>
//             </div>

//             <div>
//                 <h2>Days Present: {present}</h2>
//             </div>

//             <div>
//                 <h2>Days Absent: {absent}</h2>
//             </div>
//         </>
//     );
// }

// export default Attendance;
