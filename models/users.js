import { Schema, model, models } from "mongoose";
import { type } from "os";

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Emai is required!']
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
    },
    image: {
        type: String
    }
});
const User = models.User || model("User", UserSchema);
export default User;