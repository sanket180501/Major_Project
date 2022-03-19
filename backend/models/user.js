import mongoose from 'mongoose'

const user_schema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', user_schema)

export default User

