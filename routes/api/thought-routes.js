const router = require('express').Router();

const {
    createThoughts,
    getAllThoughts,
    getThoughtsById,
    updateThoughts,
    removeThoughts,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

//direct to api/thoughts
router.route('/').get(getAllThoughts);

//direct to /api/thoughts/:id
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(removeThoughts);

//direct to /api/thoughts/:userId
router.route('/:userId').post(createThoughts);

//direct to /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//direct to /api/thoughts/:thoughtId/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;