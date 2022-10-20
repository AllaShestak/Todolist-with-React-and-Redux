import React from 'react'
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AddItemForm component',
    component: AddItemForm
}

const  callback = action('Item form was completed')
export const AddItemFormBaseExample = (props: any) => {
    return <AddItemForm addItem={callback}/>
}

