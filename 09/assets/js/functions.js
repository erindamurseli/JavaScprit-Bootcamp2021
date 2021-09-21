        const generateRandomId = () => Math.floor(Math.random() * 99999999999);


        const displayTodos = (todos) => {
            let result = '';
            todos.forEach((todo, index) => {
                result += `
                <div class="todo">
                    <span ${todo.completed == true ? 'class="text-decoration-line-through"' :  ''}>${todo.title}</span>
                    <div class="actions">
                        <button class="btn btn-link text-success" onclick="changeTodoState(${todo.id})"><i class="far fa-check-circle"></i></button>
                        <button class="btn btn-link text-primary" onclick="editTodo(${todo.id})"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-link text-danger" onclick="deleteTodo(${todo.id})"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                `;
            });
            todos_container.innerHTML = result;
            saveTodosToLocalStorage(todos);
        };

        const deleteTodo = (id) => {
            _todos = _todos.filter((todo) => todo.id != id);
            displayTodos(_todos);
        };

        const deleteAllTodos = () => {
            _todos = [];
            displayTodos(_todos);
        };

        const changeTodoState = (id) => {
            _todos.forEach((todo) => {
                if(todo.id == id) {
                    todo.completed = !todo.completed;
                }
            });
            displayTodos(_todos);
        };

        const editTodo = (id) => {
            const todo = _todos.filter(todo => todo.id == id);
            input.value = todo[0].title;
            todo_edit_id = id;
        };

        const saveTodosToLocalStorage = (todos) => {
            localStorage.setItem('todos', JSON.stringify(todos));
        };

        const getTodosFromLocalStorage = () => {
            const todos_from_localstorage = localStorage.getItem('todosa');
            return (todos_from_localstorage == null || todos_from_localstorage == undefined) ? [] : JSON.parse(todos_from_localstorage);
        };

        const toggleDeleteAllButton = (button) => {
            button.style.display = (_todos.length == 0) ? 'none' : 'block';
        }