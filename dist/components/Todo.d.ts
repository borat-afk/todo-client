import Component from "./Component";
interface TodoData {
    id: number;
    description: string;
    status: string;
}
declare class Todo extends Component {
    private readonly id;
    private readonly description;
    private status;
    constructor({ id, description, status }: TodoData);
    toggleStatus(): Promise<void>;
    render(): HTMLElement;
}
export default Todo;
