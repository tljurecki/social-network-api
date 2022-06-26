const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

//reaction schema
const ReactionSchema = new Schema( 
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: ()=> new Types.OnjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 300
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

//thought schema
const ThoughtsSchema = new Schema(
    {
        thoughtBody: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
//get reaction count
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;

