
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
      //state.totalDays += 1;
      localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
    },

    decrement: (state) => {
      if(state.daysAbsent < state.totalDays){
        state.daysAbsent  += 1;
        state.daysPresent -= 1
        // Save daysAbsent to local storage after decrementing
        localStorage.setItem('daysAbsent', state.daysAbsent);
      }
     // state.totalDays += 1;
      localStorage.setItem('reduxState', JSON.stringify({ calculator: state }));
    },

    percent: (state) => {
      
      state.percentage = ((state.daysPresent / state.totalDays) * 100).toFixed(2)
     
      localStorage.setItem('percent', state.percentage);

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
