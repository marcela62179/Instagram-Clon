import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
	{
		avatar: { type: String },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		registerAt: { type: Date, default: Date.now() },
		followers: { type: Array, ref: 'User' },
		follows: { type: Array, ref: 'User' },
		biography: { type: String }
	},
	{
		versionKey: false
	}
);

const User = model('User', UserSchema);

export default User;
