import { createSlice } from "@reduxjs/toolkit";


export const contactsReducer = (state ={value:1}, action)=>{
    switch (action.type) {
        case "contact":
            
            return{
                ...state,
                value:state.value,
            }
    
        default:
            return state;
    }
}