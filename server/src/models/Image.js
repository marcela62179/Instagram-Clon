import { Schema, model } from "mongoose";

let ImageSchema = new Schema({
	url: { type: String, required: true },
	createdAt: { type: Date, default: Date.now() },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	comments: { type: Schema.Types.ObjectId, ref: "Comment" },
	likes: { type: Schema.Types.ObjectId, ref: "Like" },
	destacada: { type: Boolean, default: false }
});

let Image = model("Image", ImageSchema);

export default Image;
