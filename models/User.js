const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //validate email by using regex
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJson: {
        virtuals: true,
        getters: true
    },
    id: false
} 
)

//get friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//use User Schema to create User model
const User = model('User', UserSchema);

module.exports = User;
