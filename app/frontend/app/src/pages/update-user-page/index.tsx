import React from 'react';

import UpdateUserForm from '../../components/update-user-form/index';

const UpdateUserPage: React.FC = () => {
    return (
        <div className="main">
            <h1 className='main-header'>Update User</h1>
            <UpdateUserForm />
        </div>
    )
}

export default UpdateUserPage;

