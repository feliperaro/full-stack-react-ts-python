import usersSlice from './users-slice';

import { UserModel } from '../models/redux-models';
import UsersService from '../services/users-service';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';
import { AnyAction } from 'redux';

export const usersActions = usersSlice.actions

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if (getState().users.allUsers.length === 0) {
            const allUsers: UserModel[] = await UsersService.getAllUsers();
            dispatch(usersActions.setUsers(allUsers));
        }
    }
}

export const fetchUser = (user: UserModel): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        dispatch(usersActions.setUser(user));
    }
}
