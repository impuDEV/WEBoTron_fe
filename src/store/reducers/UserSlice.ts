import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../actions/ActionCreators";

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default userSlice.reducer