import React, { useEffect } from 'react'
import { useState } from 'react'
import Button_Green from './Button_Green'
import Button_Red from './Button_Red'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/calculatorSlice'

function Input_Subjects() {

  const [attended, setAttended] = useState('bg-amber-50')
  
// need to ensure only click works well....
const turngreen = () => {
  setAttended('bg-green-400')
  dispatch(increment())
}

const turnred = () => {
  setAttended('bg-red-600')
  dispatch(decrement())
 
}

const subjects = useSelector((state) => state.calculator.subjects)

const dispatch = useDispatch()

// const [sub, setSub] = useState(subjects[0].data)

// 
// const dispatch = useDispatch()

// useEffect(() => {
//     const savedColor = localStorage.getItem('boxColor')
//     if(savedColor){
//       setAttended(savedColor)
//     }
//     else{
//       setAttended('#ffffff')
//     }
// }, [])


// const ColorBox = () => {
//   const [color, setColor] = useState
// }

  return(
    <div className={attended}>

       <div onClick={turngreen}>
       <select>
      {subjects.map((subject) => (
         <option key={subject.data} value={subject.data}>
         {subject.data}
     </option>
      ))}
      </select>
       </div>
       
       <Button_Green handleClick={turngreen}/> 
       <Button_Red handleClick={turnred} />
       
    </div>
  )
}


export default Input_Subjects