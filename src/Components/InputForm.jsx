import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addSubject } from "../store/calculatorSlice";

function InputForm() {

  const dispatch = useDispatch()


  const [sub1, setSub1] = useState('')
  // const [sub2, setSub2] = useState('')
  // const [sub3, setSub3] = useState('')
  // const [sub4, setSub4] = useState('')
  // const [sub5, setSub5] = useState('')
  // const [sub6, setSub6] = useState('')


  const handleSubmit1 = (e) => {
    e.preventDefault()
    dispatch(addSubject(sub1))
    setSub1('')
  }

  // const handleSubmit2 = (e) => {
  //   e.preventDefault()
  //   dispatch(addSubject(sub2))
  //   setSub2('')
  // }

  // const handleSubmit3 = (e) => {
  //   e.preventDefault()
  //   dispatch(addSubject(sub3))
  //   setSub3('')
  // }

  // const handleSubmit4 = (e) => {
  //   e.preventDefault()
  //   dispatch(addSubject(sub4))
  //   setSub4('')
  // }

  // const handleSubmit5 = (e) => {
  //   e.preventDefault()
  //   dispatch(addSubject(sub5))
  //   setSub5('')
  // }

  // const handleSubmit6 = (e) => {
  //   e.preventDefault()
  //   dispatch(addSubject(sub6))
  //   setSub6('')
  // }


    return(
      <>
        
      <form onSubmit={handleSubmit1}>
      <div>

          Enter all your subjects one by one: <input value={sub1} onChange={(e) => setSub1(e.target.value)} />
          <button type="submit">ADD</button>
        </div>
      </form>
{/* 
       <form onSubmit={handleSubmit2}>
       <div>
          Enter Subject 2: <input value={sub2} onChange={(e) => setSub2(e.target.value)} />
          <button type= "submit">
            ADD
          </button>
        </div>
       </form>

       <form onSubmit={handleSubmit3}>
       <div>
          Enter Subject 3: <input value={sub3} onChange={(e) => setSub3(e.target.value)} />
          <button type="submit">ADD</button>
        </div>

       </form>

       <form onSubmit={handleSubmit4}>
       <div>
          Enter Subject 4: <input value={sub4} onChange={(e) => setSub4(e.target.value)} />

          <button type="submit">ADD</button>
        </div>
       </form>

       <form onSubmit={handleSubmit5}>
       <div>
          Enter Subject 5: <input value={sub5} onChange={(e) => setSub5(e.target.value)} />
          <button type="submit">ADD</button>
        </div>
       </form>

        {/* <form>
        <div onSubmit={handleSubmit6}>
          Enter Subject 6: <input value={sub6} onChange={(e) => setSub6(e.target.value)} />
          <button type="submit">ADD</button>
        </div>
        </form> */}
          {/* <form onSubmit={handleSubmit6}>
       <div>
          Enter Subject 6: <input value={sub6} onChange={(e) => setSub6(e.target.value)} />
          <button type="submit">ADD</button>
        </div>
       </form> */}
      
      </>
    )  
}

export default InputForm