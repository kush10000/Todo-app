export function Todos({ todos, setTodos }) {

    const handleTodoCompletion = async (todoId) => {
        try {
            const response = await fetch(`http://localhost:3000/completed`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: todoId
                })
            });

            if (!response.ok) {
                throw new Error('Failed to mark todo as completed');
            }

            // Update the todos array to reflect the completion status change
            const updatedTodos = todos.map(todo => {
                if (todo._id === todoId) {
                    return { ...todo, completed: true };
                } else {
                    return todo;
                }
            });

            setTodos(updatedTodos); // Update the state with the updated todos array
        } catch (error) {
            console.error('Error marking todo as completed:', error);
            // Optionally, handle errors here
        }
    };

    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => handleTodoCompletion(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}

/* export function Todos({todos}) {

    return (
        <div>
            {todos.map(function(todo){
                return <div > {/* key={todo.id} === Assuming each todo item has a unique id 
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={async function(){
                        const response = await fetch("http://localhost:3000/completed",{
                            method:'PUT',
                            body:JSON.stringify({
                                id:todo._id
                            })
                        })

                        return response;
                    }}>
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
})}
        </div>
    );
} */