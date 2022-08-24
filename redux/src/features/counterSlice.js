import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        clear: (state, action) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, clear } = counterSlice.actions;

// Action creators are generated for each case reducer function
const counterReducer = counterSlice.reducer;
export default counterReducer;
