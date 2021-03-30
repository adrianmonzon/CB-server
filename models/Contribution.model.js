const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contributionSchema = new Schema({
    rating: Number,
}, {
    timestamps: true
})

const Contribution = mongoose.model("Contribution", contributionSchema)

module.exports = Contribution
