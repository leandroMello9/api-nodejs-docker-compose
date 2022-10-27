import User from "../../model/interfaces/User";
import UserRepository from "../../repository/UserRepository";
import IListenUser from "./IListenUser";


class ListenUserCase implements IListenUser{
    
    public async execute(): Promise<User[]> {
        return UserRepository.listen();
    }
}

export default new ListenUserCase();