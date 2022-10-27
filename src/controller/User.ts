import { Request, response, Response } from "express";
import listenUserCase from '../useCases/User/ListenUsers';
import createUserCase from '../useCases/User/CreateUser';


class UserController {
    public async store(request: Request, response: Response) {
        const {name, email, password} = request.body;
        const user = await createUserCase.execute({ name, email, password })
        return response.status(200).json(user)
    }
    public async index(request: Request, response: Response){
        const users = await listenUserCase.execute();
       return response.status(200).json(users)
    }
    async deleted(){

    }
    async show() {
        
    }
}

export default new UserController();