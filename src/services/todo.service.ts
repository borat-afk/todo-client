import { AxiosResponse } from 'axios';
import ApiService from './api.service';

class TodoService {
    private apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    public async createTodo(description: string, userId: number): Promise<AxiosResponse<any>> {
        return this.apiService.post('/todos', { description, userId });
    }

    public async getTodosByUser(userId: number): Promise<AxiosResponse<any>> {
        return this.apiService.get(`/users/${userId}/todos`);
    }

    public async updateTodoStatus(todoId: number, status: string): Promise<AxiosResponse<any>> {
        return this.apiService.put(`/todos/${todoId}/status`, { status });
    }

    public async removeTodo(todoId: number): Promise<AxiosResponse<any>> {
        return this.apiService.delete(`/todos/${todoId}`);
    }
}

export default TodoService;
