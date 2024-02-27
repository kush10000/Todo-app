import { useState } from "react";

function CreateTodo(){
    const [todo,setTodo] = useState("")
    const [description,setDescription] = useState("")
    return <div>
        <input id="title" type="text" placeholder="enter todo" onChange={
            function(e){
                setTodo(e.target.value)
            }
        }/><br/>
        <input id="description" type="text" placeholder="enter description of todo" onChange={
            function(e){
                setDescription(e.target.value)
            }
        }/><br/>
        <button onClick={()=>handleClick({title:todo,description:description})}>add todo</button>
    </div>
}

async function handleClick({title,description}){
    let response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: description
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    let json = await response.json
    alert("todo added")
}

export default CreateTodo;