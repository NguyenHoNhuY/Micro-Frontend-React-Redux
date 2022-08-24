import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { Provider } from "react-redux";

export const store = configureStore({
    reducer: { counter: counterReducer },
});

export default function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
