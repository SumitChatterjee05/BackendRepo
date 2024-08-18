import mongoose, { Schema } from "mongoose";

// we will use aggregation queries. so intall node mongoose-aggregate-paginate-v2
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
 
const videoSchema = new Schema(
    {
    
    id: 
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    VideoFile: 
    {
        type: String,
        required: true,
    },

    thumbnail: 
    {
        type: String,
        required: true,
    },

    owner: 
    {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    title: 
    {
        type: String,
        required: true,
    },

    description: 
    {
        type: String,
        required: true,
    },

    duration: 
    {
        type: Number, //cloudnary URL
        required: true,
    },

    views: 
    {
        type: Numbers,
        default: 0,
    },

    isPublished: 
    {
        type: Boolean,
        defult: true,
    },
},

    {
        timestamps: true,
    }
)

//plugins
videoSchema.plugin(mongooseAggregatePaginate)

//we will use bcrypt or bcryptjs. It helps us to hash our password.
//We will also use jwt(JSON Web Token). This is used to generate tokens.
//Both of them are used for cryptography techniques.

export const Video= mongoose.model(("Video", videoSchema))
