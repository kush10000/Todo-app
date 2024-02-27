const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://kushag786:H5K2okHM6qWEOfws@cluster0.p1ixp3r.mongodb.net/todos")

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',TodoSchema)

module.exports = {
    todo
}