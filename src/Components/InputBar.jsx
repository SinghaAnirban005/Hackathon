import React from 'react'
import { useState, useEffect } from 'react'

function InputBar({id}) {

  const [inputValues, setInputValues] = useState(JSON.parse(localStorage.getItem('inputValues')));


  // Function to handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value, // Use the unique index (id) as the key
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
      <input type="text" value={inputValues[id] || ''} id={id} onChange={handleInputChange} placeholder='Enter Time slot '/>
    </>
  )
}
 

export default InputBar