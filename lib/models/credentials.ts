import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value),
            message: "Invalid Email"
        }
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
});

export default mongoose.model('user-credentials', userSchema);