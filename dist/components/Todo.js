import axiosInstance from '../services/axiosInstance';
import Component from "./Component";
class Todo extends Component {
    id;
    description;
    status;
    constructor({ id, description, status }) {
        super('div');
        this.id = id;
        this.description = description;
        this.status = status;
        this.addClass('todo');
        this.addClass(`todo__status--${status.toLowerCase()}`);
    }
    async toggleStatus() {
        const newStatus = this.status === 'New' ? 'Done' : 'New';
        try {
            await axiosInstance.put(`/todos/${this.id}`, { status: newStatus });
            this.status = newStatus;
            this.element.classList.remove('todo__status--new', 'todo__status--done', 'todo__status--inprogress');
            this.addClass(`todo__status--${newStatus.toLowerCase()}`);
            // Додаємо клас для анімації переключення статусу
            this.addClass('todo__status-transition');
            // Вимикаємо анімацію після закінчення переходу
            setTimeout(() => {
                this.element.classList.remove('todo__status-transition');
            }, 300); // Час анімації в мс (0.3 секунди)
        }
        catch (error) {
            console.error('Failed to update todo status', error);
        }
    }
    render() {
        const descriptionElement = new Component('div');
        this.addClass('todo__description');
        this.element.textContent = this.description;
        const statusElement = new Component('div');
        this.addClass('todo__status');
        this.element.textContent = this.status;
        const buttonElement = new Component('button');
        this.element.textContent = 'Toggle Status';
        this.element.addEventListener('click', this.toggleStatus.bind(this));
        this.appendChild(descriptionElement.render());
        this.appendChild(statusElement.render());
        this.appendChild(buttonElement.render());
        return this.element;
    }
}
export default Todo;
