
export interface UserModel  {
    "id": string | null,
    "username": string,
    "phone": string,
    "email": string,
}


export interface UsersArrayModel {
    allUsers: UserModel[],
    user: UserModel,
}

