import React from 'react';

import CreateUserForm from '../../components/create-user-form';
import './index.css'


const CreateUserPage: React.FC = () => {
    return (
        <div className='main'>
            <h1 className='main-header'>Create User</h1>
            <div>
                <CreateUserForm />
            </div>
        </div>
    )
}

export default CreateUserPage;

