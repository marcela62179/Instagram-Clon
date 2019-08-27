import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    avatar: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, match: '@' ,required: true, unique: true },
    password: { type: String, required: true},
    registerAt: { type: Date, default: Date.now() }
},{
    versionKey: false
})

const User = model('User', UserSchema)

export default User