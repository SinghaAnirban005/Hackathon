import { useState } from 'react'
import './App.css'
import InputForm from './Components/InputForm'
import Card from './Components/Card'

import Attendance from './Components/Attendance'

function App() {

  return (
    <div className='flex-col justify-center items-center m-20'>
        <Card />
        <Attendance />
        <InputForm />
    </div>
  )
}

export default App
