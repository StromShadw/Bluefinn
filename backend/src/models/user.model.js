import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        username: {
            type: String,
            lowercase: true,
            trim: true,
            unique: [true, 'Username already exists'],
            required: [true, 'Username is required'],
            index: true,
        },
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            lowercase: true,
            trim: true,
            required: true,
        },
        avatar: {
            type: String, //cloudinary url
        },
        password: {
            type: String,
            unique: true,
            required: [true, 'Password is required'],
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model('User', userSchema);