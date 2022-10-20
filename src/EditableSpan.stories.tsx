
import  React from 'react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: 'EditableSpan component',
    component: EditableSpan
}

const changeCallback = action("Changes changeCallback");


export  const TaskBase = () => {
    return <div>
        <EditableSpan value={"start value"} onChange={changeCallback} />


    </div>
}
