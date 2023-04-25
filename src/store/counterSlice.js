import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plateNumber: 0,
  weatherData : []
}

export const counterSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setPlateNumber: (state, action) => {
      state.plateNumber = action.payload
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlateNumber, setWeatherData } = counterSlice.actions

export default counterSlice.reducer