import api from "../api";
import { UserModel } from '../../models/redux-models';

export default {
    async createUser(user: UserModel) {
        const response = await api().post('/users/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        
        console.log(response.data);
        return response.data;
    },
    async deleteUser(user_id: string) {
        var response = await api().delete(`/users/${user_id}`)
        console.log(response.data);
        return response.data;
    },
    async getAllUsers() {
        const response = await api().get('/users/')
        console.log(response.data);
        return response.data;
    },
    async getUser(user_id: number) {
        var response = await api().get("/users/" + user_id)
        console.log(response.data);
        return response.data;
    },
    async updateUser(user_id: string, user: UserModel) {
        var response = await api().put(`/users/${user_id}`, {user})
        console.log(response.data);
        return response.data;
    },
}
