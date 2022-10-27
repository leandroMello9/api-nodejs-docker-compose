import User from "../../model/interfaces/User";

interface IListenUser {
    execute(): Promise<User[]>
}

export default IListenUser;