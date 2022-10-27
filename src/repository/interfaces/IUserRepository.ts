import User from "../../model/interfaces/User";



export default interface IUserRepository {
     listen(): Promise<User[]>
     create({name, email, password}: User): Promise<User>

}