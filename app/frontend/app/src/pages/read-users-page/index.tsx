import React, {
    useEffect, useState,
} from "react";

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchUsers } from "../../store/users-actions";

import ReadUsersForm from "../../components/read-users-form";
import "../../App.css"

const ReadUsersPage: React.FC = () => {
    const all_users = useAppSelector(state => state.users.allUsers);
    console.log(all_users);    

    return (
        <div className="main">
            <h1 className="main-header">All Users:</h1>
            <ReadUsersForm />
        </div>
    );
} 

export default ReadUsersPage;
