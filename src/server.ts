import app from "./app";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, (err) => {
    if(err) {
        console.log("Error ao connectar ao banco", err)
    }
});
const port = 3333;

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})