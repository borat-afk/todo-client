declare class TodoList {
    private todoList;
    private newTodoInput;
    private addButton;
    private todos;
    constructor();
    handleAddTodo: () => Promise<void>;
    render(): HTMLElement;
}
export default TodoList;
