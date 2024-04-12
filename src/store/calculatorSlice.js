// import { createSlice } from '@reduxjs/toolkit'
// import { nanoid } from '@reduxjs/toolkit'

// const initialState = {
//   daysPresent: 0,
//   daysAbsent: 0,
//   totalDays: 30,
//   subjects: [{
//     data: ''
//   }]
// }

// export const calculatorSlice = createSlice({
//   name: 'calculator',
//   initialState,

//   reducers: {
//     increment: (state) => {
//       if(state.daysPresent < 30){
//         state.daysPresent += 1
//       }
//       state.totalDays += 1
//     },

//     decrement: (state) => {
//       if(state.daysAbsent < 30){
//         state.daysAbsent  += 1
//       }
//       state.totalDays += 1
//     },

//     addSubject: (state, action) => {
//       const subject = {
//         data: action.payload
//       }

//       state.subjects.push(subject)
//     }
//   }
// })

// export const { increment, decrement, addSubject } = calculatorSlice.actions
// export default calculatorSlice.reducer


// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   daysPresent: 0,
//   daysAbsent: 0,
//   totalDays: 30,
//   subjects: [{
//     data: ''
//   }]
// };

// // Load state from local storage
// const savedState = JSON.parse(localStorage.getItem('reduxState'));
// const persistedState = savedState ? savedState.calculator : initialState;

// export const calculatorSlice = createSlice({
//   name: 'calculator',
//   initialState: persistedState, // Use persisted state if available, otherwise use initial state

//   reducers: {
//     increment: (state) => {
//       if(state.daysPresent < state.totalDays){
//         state.daysPresent += 1;
//       }
//       state.totalDays += 1;
//     },

//     decrement: (state) => {
//       if(state.daysAbsent < state.totalDays){
//         state.daysAbsent  += 1;
//       }
//       state.totalDays += 1;
//     },

//     addSubject: (state, action) => {
//       const subject = {
//         id: nanoid(),
//         data: action.payload
//       };

//       state.subjects.push(subject);
//       // Save state to local storage after adding a subject
//       localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
//     }
//   }
// });

// export const { increment, decrement, addSubject } = calculatorSlice.actions;
// export default calculatorSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   daysPresent: 0,
//   daysAbsent: 0,
//   totalDays: 30,
//   subjects: [{
//     data: ''
//   }]
// };

// // Load state from local storage
// const savedState = JSON.parse(localStorage.getItem('reduxState'));
// const persistedState = savedState ? savedState.calculator : initialState;

// export const calculatorSlice = createSlice({
//   name: 'calculator',
//   initialState: persistedState, // Use persisted state if available, otherwise use initial state

//   reducers: {
//     increment: (state) => {
//       if(state.daysPresent < 30){
//         state.daysPresent += 1;
//       }
//       state.totalDays += 1;
//       // Save state to local storage after incrementing daysPresent
//       localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
//     },

//     decrement: (state) => {
//       if(state.daysAbsent < 30){
//         state.daysAbsent  += 1;
//       }
//       state.totalDays += 1;
//       // Save state to local storage after incrementing daysAbsent
//       localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
//     },

//     addSubject: (state, action) => {
//       const subject = {
//         id: nanoid(), // Add unique id to each subject
//         data: action.payload
//       };

//       state.subjects.push(subject);
//       // Save state to local storage after adding a subject
//       localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
//     }
//   }
// }); 

// export const { increment, decrement, addSubject } = calculatorSlice.actions;
// export default calculatorSlice.reducer;



//last changes
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  daysPresent: 0,
  daysAbsent: 0,
  percentage: 0,
  totalDays: 30,
  subjects: [{
    id: nanoid(),
    data: ''
  }]
};

// Load state from local storage
const savedState = JSON.parse(localStorage.getItem('reduxState'));
const persistedState = savedState ? savedState.calculator : initialState;

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: persistedState,

  reducers: {
    increment: (state) => {
      if(state.daysPresent < state.totalDays){
        state.daysPresent += 1;
        // Save daysPresent to local storage after incrementing
        localStorage.setItem('daysPresent', state.daysPresent);
      }
      state.totalDays += 1;
      localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
    },

    decrement: (state) => {
      if(state.daysAbsent < state.totalDays){
        state.daysAbsent  += 1;
        // Save daysAbsent to local storage after decrementing
        localStorage.setItem('daysAbsent', state.daysAbsent);
      }
      state.totalDays += 1;
      localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
    },

    percent: (state) => {
      state.percentage =( state.daysAbsent / state.totalDays) * 100
      localStorage.setItem('daysAbsent', state.percentage);

      localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));      
    },

    addSubject: (state, action) => {
      const subject = {
        id: nanoid(),
        data: action.payload
      };

      state.subjects.push(subject);
      // Save state to local storage after adding a subject
      localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
    }
  }
});

export const { increment, decrement, addSubject, percent } = calculatorSlice.actions;
export default calculatorSlice.reducer;
