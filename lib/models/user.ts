import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 60
    },
    address: {
        doorNo: String,
        street: String
    }
});

export default mongoose.model('users', userSchema);