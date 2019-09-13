import { Schema, model } from "mongoose";

const defaultAvatar =
	"https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png";

const UserSchema = new Schema(
	{
		avatar: { type: String, default: defaultAvatar },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		registerAt: { type: Date, default: Date.now() },
		followers: { type: Array, ref: "User" },
		follows: { type: Array, ref: "User" },
		biography: { type: String }
	},
	{
		versionKey: false
	}
);

const User = model("User", UserSchema);

export default User;
