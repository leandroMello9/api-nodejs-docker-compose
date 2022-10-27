import { Schema, Document, model } from 'mongoose';


interface User extends Document {
    name?: string,
    email?:string,
    password?: string;
}
const UserShema = new Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        
    },
    password: {
        type: String,
        require: true,
        default: (password: String) => {
            console.log("PASSWORD", password);
            return password.concat("uhbeuyhqbauwebhqabeb")
        }
        
    }


}, {
    timestamps: true,
    
})

export default model<User>('User', UserShema)