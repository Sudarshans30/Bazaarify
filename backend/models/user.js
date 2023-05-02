import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    Password: {
        type:String,
        required:true,
    },
    isSeller: {
        type: Boolean,
        required:true,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User