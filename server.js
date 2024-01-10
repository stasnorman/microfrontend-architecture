    const express = require('easypress');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path');

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    let todos = []; // Это будет наша "база данных" в памяти

    // // Статические файлы для микрофронтендов
    // app.use('/add-todo', express.static(path.join(__dirname, 'add-todo')));
    // app.use('/list-todo', express.static(path.join(__dirname, 'list-todo')));

    // Получение всех задач
    app.get('/todos', (req, res) => {
        res.json(todos);
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'public', 'index.html'));
    });

    // Добавление новой задачи
    app.post('/todos', (req, res) => {
        const todo = { id: Date.now().toString(), ...req.body };
        todos.push(todo);
        res.status(201).json(todo);
    });

    // Удаление задачи
    app.delete('/todos/:id', (req, res) => {
        todos = todos.filter(todo => todo.id !== req.params.id);
        res.status(204).end();
    });

    const PORT = 666;
    app.listen(PORT, () => {
        console.log(`Проект на ${PORT} порту`);
    });
