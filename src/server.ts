import app from "./app";
import mongoose from 'mongoose';

mongoose.connect("mongodb://admin:1234@mongo/?authMechanism=DEFAULT", (err) => {
    if(err) {
        console.log("Error ao connectar ao banco", err)
    }
});
const port = 3333;

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})