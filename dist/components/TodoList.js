import axiosInstance from '../services/axiosInstance';
import Todo from './Todo';
class TodoList {
    todoList;
    newTodoInput;
    addButton;
    todos = [];
    constructor() {
        this.todoList = document.createElement('div');
        this.todoList.classList.add('todo-list');
        this.newTodoInput = document.createElement('input');
        this.newTodoInput.type = 'text';
        this.newTodoInput.placeholder = 'Enter new todo description...';
        this.addButton = document.createElement('button');
        this.addButton.textContent = 'Add';
        this.addButton.addEventListener('click', this.handleAddTodo);
        this.todoList.appendChild(this.newTodoInput);
        this.todoList.appendChild(this.addButton);
    }
    handleAddTodo = async () => {
        try {
            const description = this.newTodoInput.value.trim();
            if (!description) {
                // Add validation and error handling for empty description if needed
                return;
            }
            const response = await axiosInstance.post('/api/todo', { description });
            const todoData = {
                id: response.data.data.id,
                description,
                status: 'New', // New todo always starts with 'New' status
            };
            const newTodo = new Todo(todoData);
            this.todos.push(newTodo);
            this.todoList.appendChild(newTodo.render());
            this.newTodoInput.value = '';
        }
        catch (error) {
            console.error('Failed to create todo:', error);
            // Add error handling here if needed
        }
    };
    render() {
        return this.todoList;
    }
}
export default TodoList;
