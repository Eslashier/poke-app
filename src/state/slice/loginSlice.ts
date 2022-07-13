import { createSlice } from "@reduxjs/toolkit"
import { possibleStatus } from "../../config/possibleStatus"

type loginType = {
    name?: string,
    isLoggedIn: true | false,
}

type loginStateType = {
    login: loginType,
}

const initialState: loginStateType = {
    login: {
        isLoggedIn: false
    },
}

const logInSlice = createSlice({
    name: "logged",
    initialState,
    reducers: {
        logInUserReducer(state, action) {
            const stateLoggedIn = {
                ...state, login: {
                    //name: action.payload.name,
                    isLoggedIn: true
                }
            }
            return stateLoggedIn
        },
        logOutUserReducer() {
            return {
                login: {
                    name: "",
                    isLoggedIn: false
                }
            }
        }
    }
})


export default logInSlice.reducer

export const { logInUserReducer, logOutUserReducer } = logInSlice.actions