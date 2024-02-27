const express = require("express");
const app = express();
const { todo } = require("./db");
const cors = require('cors');
const { createTodo, updateTodo } = require("./types");

app.use(express.json());
app.use(cors());

app.get('/todos',async function(req,res){
    let todos = await todo.find({});
    res.json({
        todos
    });
})

app.post('/Todo',async function(req,res){
    let createPayload = req.body;
    let safe = createTodo.safeParse(createPayload);
    if(!safe.success)
    res.status(400).json({msg:"cannot create todo"});
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
        })
})

app.put('/completed',async function(req,res){
    let updatePayload = req.body;
    let safeUpdate = updateTodo.safeParse(updatePayload);
    if(!safeUpdate.success){
        res.status(411).json({
            msg:'wrong id'
        })
    }
    const updatedTodo = await todo.findByIdAndUpdate(updatePayload.id, { completed: true }, { new: true });
    res.json(updatedTodo);

})

app.listen(3000);