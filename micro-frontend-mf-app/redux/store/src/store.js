import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        clear: (state) => {
            state.count = 0
        },
    },
})

// Action creators are generated for each case reducer function
const { increment, clear } = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
})