import React, {useEffect, useState} from 'react'
import {TaskPriorities, TaskStatuses, todolistsApi} from "../api/todolists-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.createTodolist("New title")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    let todolistId = '720cefe0-066e-4a04-b3a4-a71f81720f68';
    useEffect(() => {
        todolistsApi.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    let todolistId = 'd5a8dd55-5ea3-46b4-8aae-a53bd992f3d4';
    useEffect(() => {
        todolistsApi.updateTodolistTitle(todolistId, "Some string for title")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const getTasks = () => {
        todolistsApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>

            <button>{getTasks}get tasks</button>
        </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistsApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input type="text" placeholder={"taskId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button>{deleteTask}delete task</button>
        </div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskTitle, setTaskTitle] = useState<string>('')
    const createTask = () => {
        todolistsApi.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input type="text" placeholder={"taskTitle"} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <button>{createTask}create task</button>
        </div>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [title, setTitle] = useState<string>('title 1')
    const [taskDescription, setTaskDescription] = useState<string>('Description')
    const [taskStatus, setTaskStatus] = useState<number>(0)
    const [taskPriority, setTaskPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const updateTask = () => {
        todolistsApi.updateTask(todolistId, taskId, {
            deadline: " ",
            title: title,
            startDate: " ",
            description: taskDescription,
            priority: taskPriority,
            status: taskStatus

        })
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value) }}/>
            <input type="text" placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value) }}/>
            <input type="text" placeholder={"task Title"} value={title} onChange={(e) => {setTitle(e.currentTarget.value)}}/>
            <input type="text" placeholder={"task Description"} value={taskDescription} onChange={(e) => {setTaskDescription(e.currentTarget.value)}}/>
            <input type="text" placeholder={"task Status"} value={taskStatus} onChange={(e) => {setTaskStatus(+e.currentTarget.value)}}/>
            <input type="text" placeholder={"task Priority"} value={taskPriority} onChange={(e) => {setTaskPriority(+e.currentTarget.value)}}/>
            <input type="text" placeholder={"task startDate"} value={startDate} onChange={(e) => {setStartDate(e.currentTarget.value)}}/>
            <input type="text" placeholder={"task startDate"} value={deadline} onChange={(e) => {setDeadline(e.currentTarget.value)}}/>
            <button>{updateTask}update task</button>
        </div>
    </div>
}
