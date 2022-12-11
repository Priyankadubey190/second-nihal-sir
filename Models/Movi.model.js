const mongoose = require('mongoose');

const moviSchema = mongoose.Schema({
    poster: {type: String, required: true},
    title: {type: String, required: true},
    name : {type: String, required: true},
    rating: {type: Number},
},
{
    varsion : false,
    timestamps:true
}
);

const MoviModel = mongoose.model("movidata", moviSchema)

module.exports = {MoviModel}