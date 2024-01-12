const addTodo = async () => {
    const inputTag = document.getElementById("newTodo");
    const title = inputTag.value;

    const responce = await fetch('http://81.177.140.68:666/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });
    
    if(responce.ok){
        alert("Информация успешно добавлена!");
        inputTag.value = '';
    }
};
