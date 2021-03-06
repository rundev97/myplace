var mongoose = require('mongoose');

var placeSchema = new mongoose.Schema({
    name:String,
    country: String,
    city: String,
    image: String,
    description: String,
    created:{ type: Date, default: Date.now}, 
    location: String,
    lat: Number,
    lng: Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;

