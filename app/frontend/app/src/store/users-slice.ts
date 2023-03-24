import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel, UsersArrayModel } from "../models/redux-models";


const initialUsersState: UsersArrayModel = {
    allUsers: [],
    user: {
        "id": "0",
        "username": "fefe",
        "email": "feliperamosroque@gmail.com",
        "phone": "11 97070-7070"
    }
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    reducers: {
        setUsers(state, action: PayloadAction<UserModel[]>) {
            state.allUsers = action.payload;
        },
        setUser(state, action: PayloadAction<UserModel>) {
            state.user = action.payload
        },
    }
})

export default usersSlice

