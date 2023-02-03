import mongoose, { Document } from "mongoose"
const Schema = mongoose.Schema;

interface Address {
    doorNo: string;
    street: string;
}

export interface IUser extends Document {
    name: string;
    age: number;
    address: Address
}

const userSchema = new Schema<IUser>({
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

export default mongoose.model<IUser>('users', userSchema);