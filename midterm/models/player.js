// create a player model with mongoose
let mongoose = require('mongoose');

let playerSchema = new mongoose.Schema(
    {
        firstname: 
        {
            type: String,
            required: 'firstname is required'
        },
        lastname:
        {
            type: String,
            required: 'lastname is required'
        },
        number:
        {
            type: Number
        }

    });

    //make this model pulic
module.exports =  mongoose.model('Player',playerSchema);