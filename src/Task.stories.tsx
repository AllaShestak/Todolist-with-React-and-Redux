import {Task} from "./Task";
import  React from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Task component',
    component: Task
}

const changeTaskStatus = action("Changes changeTaskStatus");
const changeTaskTitle = action("Changes changeTaskTitle");
const removeTask = action("Changes removeTask");

export  const TaskBase = () => {
    return <div>
        <Task
            task={{id: '1', isDone: true, title: 'CSS'}}
            changeTaskStatus={changeTaskStatus}
            changeTaskTitle={changeTaskTitle}
            removeTask={removeTask}
            todolistId={'todolistID'}
        />
        <Task
            task={{id: '2', isDone: true, title: 'JS'}}
            changeTaskStatus={changeTaskStatus}
            changeTaskTitle={changeTaskTitle}
            removeTask={removeTask}
            todolistId={'todolistID'}
        />

    </div>
}
