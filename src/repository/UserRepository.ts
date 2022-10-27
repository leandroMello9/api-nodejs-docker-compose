import User from "../model/interfaces/User";
import IUserRepository from "./interfaces/IUserRepository";
import UserModel from '../model/User'

class UserRepository implements IUserRepository {

    public async listen(): Promise<User[]> {
        return UserModel.find();
    }

    public async create({name, email, password}: User): Promise<User> {
        const user = await UserModel.create({
            name,
            email,
            password
        })
    
        return user;
    }

}

export default new UserRepository();