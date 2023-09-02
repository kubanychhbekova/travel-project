import {configureStore} from "@reduxjs/toolkit";
import RegisterSlice from "./registerSlice";


export const store = configureStore({
    reducer: {
        user: RegisterSlice
    }
})