import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      TrueFalseBar: false,          
}


const sideBarTrueFalse = createSlice ({
    name: "TrueFalse",
    initialState,
    reducers : {
        setTrueFalse : (state, action) => { 
            state.TrueFalseBar = action.payload ;
        },
    }

})

export const { setTrueFalse } = sideBarTrueFalse.actions

export const OpenClose =  (state) => state.TrueFalse.TrueFalseBar

export default sideBarTrueFalse.reducer;