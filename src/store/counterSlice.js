import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plateNumber: 0,
}

export const counterSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setPlateNumber: (state, action) => {
      state.plateNumber = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlateNumber } = counterSlice.actions

export default counterSlice.reducer