import React from 'react'
import { useState, useEffect } from 'react'

function InputBar({id}) {

  const [inputValues, setInputValues] = useState(JSON.parse(localStorage.getItem('inputValues')));


  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value, 
    }));
  };

  useEffect(() => {
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  }, [inputValues, id]);

  
  useEffect(() => {
    const storedInputValues = JSON.parse(localStorage.getItem('inputValues')) || {};
    setInputValues(storedInputValues);
  }, []);

  return(

    <>
      <input type="text" value={[id] || ''} id={id} onChange={handleInputChange} placeholder='Enter Time slot '/>
    </>
  )
}
 

export default InputBar