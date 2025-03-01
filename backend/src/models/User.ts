import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    _id : string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default model<IUser>('User', userSchema);