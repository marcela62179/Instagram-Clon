import {Schema, model} from 'mongoose';

let ImageSchema = new Schema({
    url: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    author: { type: Schema.Types.ObjectId, ref: 'User'},
})

let Image = model('Image', ImageSchema);

export default Image;