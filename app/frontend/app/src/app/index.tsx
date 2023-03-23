import React, { useEffect } from "react";

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import CreateUserPage from "../pages/create-user-page";
import HomePage from '../pages/home-page';
import UpdateUserPage from '../pages/update-user-page';
import ReadUsersPage from "../pages/read-users-page";
import NotFoundPage from "../pages/not-found-page";

import { useAppDispatch } from '../hooks/redux-hooks';
import { fetchUsers } from "../store/users-actions";

import "./index.css"

const App: React.FC = () => {  
  
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchUsers())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<ReadUsersPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="/users/:user_id/update" element={<UpdateUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App;