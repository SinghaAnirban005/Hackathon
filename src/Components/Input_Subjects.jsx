// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import Button_Green from './Button_Green'
// import Button_Red from './Button_Red'

// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from '../store/calculatorSlice'

// function Input_Subjects({id}) {

//   const [attended, setAttended] = useState(() => {
//     // Load color from local storage if available, otherwise set default color
//     return localStorage.getItem(`inputColor_${id}`) || 'bg-amber-50';
//   });

//   // const dispatch = useDispatch();

//   useEffect(() => {
//     // Save color to local storage whenever it changes
//     localStorage.setItem(`inputColor_${id}`, attended);
//   }, [attended, id]);


// const turngreen = () => {
//   setAttended('bg-green-400')
//   dispatch(increment())
// }

// const turnred = () => {
//   setAttended('bg-red-600')
//   dispatch(decrement())
// }

// // const turngreen = () => {
  
// //     setAttended((prevInputValues) => ({
// //     ...prevInputValues,
// //     [id]: 'bg-green-400', // Use the unique index (id) as the key
// //   }));
// // };

// // useEffect(() => {
// //   localStorage.setItem('inputColor', JSON.stringify(attended));
// // }, [attended, id]);


// // useEffect(() => {
// //   const storedInputColors = JSON.parse(localStorage.getItem('inputColor')) || {};
// //   setAttended(storedInputColors);
// // }, []);


// const subjects = useSelector((state) => state.calculator.subjects)

// const dispatch = useDispatch()


//   return(
//     <div className={attended}>

//       <div id={id} onClick={turngreen} onDoubleClick={turnred}>
//         Color Component
//       </div>

//        <div>

//        <select>
//       {subjects.map((subject) => (
//          <option key={subject.data} value={subject.data}>
//          {subject.data}
//      </option>

//       ))}
//       </select>
//        </div>
       
//        {/* <Button_Green handleClick={turngreen}/> 
//        <Button_Red handleClick={turnred} /> */}
       
//     </div>
//   )
// }

// export default Input_Subjects

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/calculatorSlice';

function Input_Subjects({ id }) {
//   const [attended, setAttended] = useState(() => {
//     return localStorage.getItem(`inputColor_${id}`) || 'bg-amber-50';
//   });
//   const [selectedSubject, setSelectedSubject] = useState('');
  

//   // Load selected subject from localStorage when component mounts
 
//   useEffect(() => {
//     const storedSubject = localStorage.getItem(`selectedSubject_${id}`);
//     if (storedSubject) {
//       setSelectedSubject(storedSubject);
//     }
//   }, [id]);

//   // Update localStorage when selected subject changes
//   useEffect(() => {
//     localStorage.setItem(`selectedSubject_${id}`, selectedSubject);
//   }, [selectedSubject, id]);


//   useEffect(() => {
//     // Save color to local storage whenever it changes
//     localStorage.setItem(`inputColor_${id}`, attended);
//   }, [attended, id]);


//   const turnred = () => {
//     setAttended('bg-red-600');
//     dispatch(decrement());
//   };


//   const turngreen = () => {

//     setAttended((prevInputValues) => ({
//     ...prevInputValues,
//     [id]: 'bg-green-400', 
//   }));
//   dispatch(increment())
// };

// useEffect(() => {
//   localStorage.setItem('inputColor', JSON.stringify(attended));
// }, [attended, id]);


// useEffect(() => {
//   const storedInputColors = JSON.parse(localStorage.getItem('inputColor')) || {};
//   setAttended(storedInputColors);
// }, []);


//   const subjects = useSelector((state) => state.calculator.subjects);
//   const dispatch = useDispatch();

//   const handleSubjectChange = (event) => {
//     setSelectedSubject(event.target.value);
//   };


const [attended, setAttended] = useState(() => {
  return localStorage.getItem(`inputColor_${id}`) || 'bg-amber-50';
});
const [selectedSubject, setSelectedSubject] = useState('');

const dispatch = useDispatch();
const subjects = useSelector((state) => state.calculator.subjects);

useEffect(() => {
  const storedSubject = localStorage.getItem(`selectedSubject_${id}`);
  if (storedSubject) {
    setSelectedSubject(storedSubject);
  }
}, [id]);

useEffect(() => {
  localStorage.setItem(`selectedSubject_${id}`, selectedSubject);
}, [selectedSubject, id]);

useEffect(() => {
  localStorage.setItem(`inputColor_${id}`, attended);
}, [attended, id]);

const turnred = () => {
  setAttended('bg-red-600');
  dispatch(decrement());
};

const turngreen = () => {
  setAttended('bg-green-400');
  dispatch(increment());
};

useEffect(() => {
  localStorage.setItem(`inputColor_${id}`, attended);
}, [attended, id]);

useEffect(() => {
  const storedInputColor = localStorage.getItem(`inputColor_${id}`);
  if (storedInputColor) {
    setAttended(storedInputColor);
  }
}, [id]);

const handleSubjectChange = (event) => {
  setSelectedSubject(event.target.value);
};


  return (
    <div className={attended}>
      <div id={id} onClick={turngreen} onDoubleClick={turnred}>
        TAP HERE
      </div>

      <div>
        <select value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject.data} value={subject.data}>
              {subject.data}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input_Subjects;
