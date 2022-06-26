//require user and thoughts models
const { Thoughts, User } = require('../models');

const thoughtsController = {
    //create a new thought
    createThoughts({params, body }, res) {
        Thoughts.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({ message: 'No thoughts found with this id' });
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    }, 

    //get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.json(err));
    },

    //find a thought by id
    getThoughtsById({ params}, res) {
        Thoughts.findOne({ _id: params.id})
        .populate({ path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({ message: 'No thoughts found with this id' });
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err));
        
    },

    //update thought
    updateThoughts({params, body}, res) {
        Thoughts.findOneAndUpdate({ _id: params.id}, body, {new: true, runValidators: true })
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thoughts found with this id' });
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },

    //delete thought
    removeThoughts({params}, res) {
        Thoughts.findOneAndDelete({_id: params.id})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.json(err));
    },

    //add a reaction
    addReaction({ params, body}, res) {
        Thoughts.findOneAndUpdate({ _id: params.thoughtId}, {$push: {reactions: body}}, {new: true, runValidators: true})
        .populate({path: 'reactions', select: ('-__v')})
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.json(err));
    },

    //remove reaction
    removeReaction({params}, res) {
        Thoughts.findOneAndUpdate({ _id: params.thoughtsId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new: true})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.json(err));
    }
};

module.exports = thoughtsController;