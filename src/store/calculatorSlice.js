import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
  daysPresent: 0,
  daysAbsent: 0,
  totalDays: 30,
  subjects: [{
    data: ''
  }]
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,

  reducers: {
    increment: (state) => {
      if(state.daysPresent < 30){
        state.daysPresent += 1
      }
      state.totalDays += 1
    },

    decrement: (state) => {
      if(state.daysAbsent < 30){
        state.daysAbsent  += 1
      }
      state.totalDays += 1
    },

    addSubject: (state, action) => {
      const subject = {
        data: action.payload
      }

      state.subjects.push(subject)
    }
  }
})

export const { increment, decrement, addSubject } = calculatorSlice.actions
export default calculatorSlice.reducer