import React, {
    useState, 
} from "react";

import { useNavigate } from "react-router-dom";
import usersService from "../../services/users-service";
import { Form, Button } from "semantic-ui-react";
import { UserModel } from '../../models/redux-models/index';

import "./index.css"

const CreateUserForm: React.FC = () => {
    const navigate = useNavigate()
    
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    const validateData = () => {
        if (username === "") {
            return false
        }
        else if (email === "") {
            return false
        }
        else if (phone === "") {
            return false
        }
        else {
            return true
        }
    }

    const postUser = () => {
        if (!validateData()) {
            return 
        }
        
        const user: UserModel = {
            id: null,
            username,
            email,
            phone
        }
        usersService.createUser(user)

        return navigate("../users")
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label style={{margin: 5}}>{"Username: "}</label>
                <input 
                    placeholder="username" 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    style={{marginLeft: 10}}>
                </input>
            </Form.Field>
            <Form.Field>
                <label style={{margin: 5}}>{"Email: "}</label>
                <input 
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    style={{marginLeft: 38}}>
                </input>
            </Form.Field>
            <Form.Field>
                <label style={{margin: 5}}>{"Phone: "}</label>
                <input 
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    style={{marginLeft: 32}}>
                </input>
            </Form.Field>
            <Button 
                type="submit" 
                onClick={() => postUser()}>
                {"Submit"}
            </Button>
        </Form>
    )
}

export default CreateUserForm

