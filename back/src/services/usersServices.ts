import IUsers from "../interfaces/IUsers";
import IUserDto from "../dto/userDto";

let users: IUsers[] = [];
let id: number = 1;

export const createUserService = async (userData: IUserDto): Promise<IUsers> => {
    const newUser: IUsers = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser);
    id++;
    return newUser;
}

export const getUserService = async (): Promise<IUsers[]> => {
    return users;
}

export const deleteUserService = async (id: number): Promise<void> => {
    users = users.filter((user: IUsers) => {
        return user.id !== id;
    });
}