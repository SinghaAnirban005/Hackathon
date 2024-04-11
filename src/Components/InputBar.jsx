import React from 'react'
import { useState, useEffect } from 'react'

function InputBar({id}) {

  const [inputValues, setInputValues] = useState();

  // Function to handle input change

  return(

    <>
      <input type="text" value={inputValues} id={id} onChange={(e) => setInputValues(e.target.value)} placeholder='Enter Time slot '/>
    </>
  )
}

export default InputBar