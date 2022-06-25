import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { useStore } from "react-redux";

export const Slice = createSlice({
    name: "counter",
    initialState: {
        statemenu:null
    },
    reducers: {
        menustate: (state, action) => {
            const newstate = action.payload
            return {statemenu:newstate }
        },

    }
})
export const { menustate } = Slice.actions
export default Slice.reducer