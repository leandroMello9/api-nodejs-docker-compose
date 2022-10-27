import User from "../../model/interfaces/User";
import UserRepository from "../../repository/UserRepository";
import ICreateUser from "./ICreateUser";


class CreateUserCase implements ICreateUser{
    
    public async execute({name, email, password}: User): Promise<User> {
        const user = await UserRepository.create({
            name,
            email,
            password
        });
        return user;
    }
}

export default new CreateUserCase();