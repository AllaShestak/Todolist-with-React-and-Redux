import React from 'react'
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";

export default {
    title: 'AppWithRedux component',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}

const callback = action('Item form was completed')

export const AppWithReduxBaseExample = () => {
    return <AppWithRedux/>
}

