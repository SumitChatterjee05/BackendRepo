import mongoose, {Schema} from "mongoose";

import jwt from "jsonwebtoken"; //JWT is a bearer token //whoever has this token data will be send to him
import bcrypt from "bcrypt"

const userSchema = new Schema(
{
    username: 
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, //when we have to make a filed searchable in an optimzed fashion makes its index true.
    },

    email: 
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    
    fullname: 
    {
        type: String,
        required: true,
        trim: true,
        index: true,
    },

    avatar:
    {
        type: String, // cloudinary url
        required: true,
    },

    coverimage: 
    {
        type: String,
    },

    watchhistory:
    [ 
        {
            type: Schema.Types.ObjectId,
            ref: "Video"

        }
    ],

    password:
    {
        type: String,
        required: [true, 'Password is required'] 
    },

    refreshTokens:
    {
        type: String,
    }
},

{
    timestamps: true
})

//Direct encryption is not possible so we have to use hooks of mongoose.
//Pre hook is a middelware.

userSchema.pre("save", async function(next)
{
    if(!this.isModified("passworf")) return next();

    this.password= bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },

        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },

        process.env.REFRESH_TOKEN_SECRET,

        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const user= mongoose.model("User", userSchema);