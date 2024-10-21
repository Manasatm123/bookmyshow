import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String },  
    language: { type: String },
    duration: { type: String },
    genre: { type: String },
    rating: { type: String },
    releaseDate: { type: String },
    certificate: {type : String},
    screen:{type:String},
    pic1:{type : String},
    pic:{type : String}
});


export default mongoose.model.Movies||mongoose.model('Movies',movieSchema)