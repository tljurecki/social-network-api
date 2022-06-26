const { User } = require('../models');

const userController = {
    //create new user
    createUser({body}, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //get all users
    getUsers(req, res) {
        User.find({})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .select(-__v)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
    //find a user by id
    getUserById({params}, res) {
        User.findOne({_id: params.id})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //update User
    updateUser({params, body}, res) {
        User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //remove User
    removeUser({params}, res) {
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //add friend
    addFriend({params}, res) {
        User.findOneAndUpdate({ _id: params.id}, {$push: {friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //remove friend
    removeFriend({params}, res) {
        User.findOneAndUpdate({_id: params.id}, {$pull: {friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select:'___v'})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }

};

module.exports = userController;