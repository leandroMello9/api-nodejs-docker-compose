import User from "../../model/interfaces/User";

interface ICreateUser {
    execute({name, email, password}: User): Promise<User>
}

export default ICreateUser;