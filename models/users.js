import { Schema, model, models } from "mongoose";
import { type } from "os";

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Emai is required!']
    }
})