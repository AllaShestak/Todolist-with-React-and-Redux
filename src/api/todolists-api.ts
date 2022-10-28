import axios, {AxiosResponse} from "axios";


const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "df1c1e64-a087-450d-ba3b-6104eeeb01d6"
    }
}
export  type TodolistPropsType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type ResponseType<D> = {
    data: D
    messages: Array<string>
    resultCode: number
}


export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export type GetTaskResponseType={
    data: {item: TodolistPropsType }
    messages: Array<string>
    totalCount: number
    items : TaskType
    error: string | null
}

export const todolistsApi = {
    getTodolists() {
        let promise = axios.get<Array<TodolistPropsType>>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise;
    },
    createTodolist(title: string) {
        let promise = axios.post<Array<ResponseType<{item: TodolistPropsType }> >>("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: title}, settings)
        return promise;
    },
    deleteTodolist(id: string) {
        let promise = axios.delete<Array<ResponseType<{}> >>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
        return promise;
    },
    updateTodolistTitle(id: string, title: string) {
        let promise = axios.put<Array<ResponseType<{}> >>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: "I pun new title"}, settings)
        return promise;
    },
    getTasks(todolistId: string) {
        let promise = axios.get<Array<GetTaskResponseType>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`, settings)
        return promise;
    },
    deleteTask(id: string, taskId: string) {
        return axios.delete<Array<ResponseType<{}>>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}/tasks/${taskId}`, settings)
    },
    createTask(id: string, title: string) {
        return axios.post<Array<ResponseType<{item: TaskType}>>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}/tasks/`,{title:title}, settings)
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return axios.put<UpdateTaskModelType, AxiosResponse<ResponseType<{ item: TaskType }>>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`, model, settings);
    }
}
