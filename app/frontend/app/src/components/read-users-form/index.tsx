import React from 'react'

import { Button, Table } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { fetchUser, fetchUsers } from '../../store/users-actions';
import usersService from '../../services/users-service';
import { UserModel } from '../../models/redux-models';

const ReadUsersForm: React.FC = () => {

    const dispatch = useAppDispatch()
    const all_users = useAppSelector(state => state.users.allUsers);

    const onDelete = (user_id: string) => {
        if (!user_id) {
            return false
        }
        usersService.deleteUser(user_id).then(() => {
            dispatch(fetchUsers())
        })
    }

    const onUpdate = (user: UserModel) => {
        dispatch(fetchUser(user))
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>{"Username"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Email"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Phone"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Update"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Delete"}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {all_users.map((user) => {
                        return (
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.username}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.phone}</Table.Cell>

                                <Table.Cell>
                                    <Link to={`${user.id}/update`} relative='path'>
                                        <Button onClick={() => onUpdate(user)}>{"Update"}</Button>
                                    </Link>
                                </Table.Cell>

                                <Table.Cell>
                                    <Button onClick={() => onDelete(user.id as string)}>{"Delete"}</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default ReadUsersForm;
