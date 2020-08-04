import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MarvelSearch from '../MarvelSearch/MarvelSearch'
import Layout from '../Layout/Layout'
import SettingsScreen from '../SettingsScreen/SettingsScreen'
import FavoriteScreen from '../FavoriteScreen/FavoriteScreen'
import TodoList from '../todo_list/TodoList/TodoList'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import globalReducer from '../reducers'

const store = createStore(
    globalReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const App = () => {
    const PageNotFound = () => <div>Page introuvable</div>

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={MarvelSearch} />
                        <Route path="/todo/:name" component={TodoList} />
                        <Route path="/settings" component={SettingsScreen} />
                        <Route path="/favorites" component={FavoriteScreen} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}

export default App
