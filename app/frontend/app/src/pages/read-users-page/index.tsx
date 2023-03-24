import React from "react";

import ReadUsersForm from "../../components/read-users-form";
import { useAppSelector } from '../../hooks/redux-hooks';
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
