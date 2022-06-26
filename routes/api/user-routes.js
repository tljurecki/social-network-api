const router = require('express').Router();

const {
    createUser,
    getUser,
    getUserById,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

//direct to /api/users 
router.route('/').get(getUser).post(createUser);

//directs to /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(removeUser);

//directs to /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;