import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
    firstLetter: JSON.parse(localStorage.getItem("firstLetter")) || null,
    hasImage: JSON.parse(localStorage.getItem("hasImage")) || false,
    saveImage: localStorage.getItem("saveImage") || null,

}

const RegisterSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser(state, action) {
            state.user = action.payload
        },
        updateUser(state, action) {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        IsAuth(state, action) {
            let auth = JSON.parse(localStorage.getItem("isAuth"))
            state.isAuth = action.payload
            auth = action.payload
            localStorage.setItem("isAuth", JSON.stringify(auth))
        },
        firstAuth(state, action) {
            state.isAuth = action.payload
            localStorage.setItem("isAuth", JSON.stringify(action.payload))
        },
        logoutUser(state,action){
           state.user={}
            localStorage.removeItem("user")
        },
        getLetter(state, action) {
            let letter=  JSON.parse(localStorage.getItem("firstLetter")) || null
            state.firstLetter = action.payload
            letter=action.payload

            localStorage.setItem("firstLetter", JSON.stringify(letter))
        },
        handleImage(state, action) {
            state.saveImage = action.payload
            localStorage.setItem("saveImage", action.payload)

        },
        handleHasImage(state, action) {
            state.hasImage = action.payload
        },


    }
})
export const {getUser, IsAuth, getLetter, handleImage, handleHasImage, updateUser,logoutUser, firstAuth} = RegisterSlice.actions;
export default RegisterSlice.reducer