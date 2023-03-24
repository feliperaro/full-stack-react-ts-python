import React, {
    useState,
    useEffect,
} from "react";

import { Button, Form } from 'semantic-ui-react';
import usersService from "../../services/users-service";
import { UserModel } from "../../models/redux-models";
import { useAppSelector } from '../../hooks/redux-hooks';
import { useNavigate } from "react-router";

const UpdateUserForm: React.FC = () => {
    const navigate = useNavigate()    

    const userState = useAppSelector(state => state.users.user)
    const [user, setUser] = useState<UserModel>(userState)

    useEffect(() => {
        setUser(userState)
        setId(userState.id)
    }, [])

    const [id, setId] = useState<string | null>(user.id)
    const [username, setUsername] = useState<string>(user.username)
    const [email, setEmail] = useState<string>(user.email)
    const [phone, setPhone] = useState<string>(user.phone)
    
    const updateUser = () => {        
        const user_updated = {
            id,
            username,
            email,
            phone,
        }   
        
        console.log(user_updated);
        usersService.updateUser(id as string, user_updated)
        
        return navigate("../users")
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label style={{margin: 5}}>{"Username: "}</label>
                <input 
                    placeholder={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{marginLeft: 10}}>
                </input>
            </Form.Field>
            <Form.Field>
                <label style={{margin: 5}}>{"Email: "}</label>
                <input 
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{marginLeft: 40}}>
                </input>
            </Form.Field>
            <Form.Field>
                <label style={{margin: 5}}>{"Phone: "}</label>
                <input 
                    placeholder={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{marginLeft: 35}}>
                </input>
            </Form.Field>
            <Button type="submit" onClick={updateUser}>{"Submit"}</Button>
        </Form>
    )
}

export default UpdateUserForm;

