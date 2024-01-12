const loadTodos = async () => {
    const response = await fetch('http://81.177.140.68:666/todos');
    const todos = await response.json();
    document.getElementById('todoList').innerHTML = todos.map(todo => 
        `<li>${todo.title} <button onclick="deleteTodo('${todo.id}')">Delete</button></li>`
    ).join('');
};

const deleteTodo = async (id) => {
    await fetch(`http://81.177.140.68:666/todos/${id}`, {
        method: 'DELETE',
    });
    loadTodos();
};

// Вызовите эту функцию, когда микрофронтенд загружается
loadTodos();
