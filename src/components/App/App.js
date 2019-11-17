import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Layout from "../Layout/Layout"
import SearchScreen from "../SearchScreen/SearchScreen"
import FavoriteScreen from "../FavoriteScreen/FavoriteScreen"
import NotFoundScreen from "../NotFoundScreen/NotFoundScreen"

class App extends React.Component {
   render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" exact>
                            <SearchScreen/>
                        </Route>
                        <Route path="/favorites">
                            <FavoriteScreen/>
                        </Route>
                        <Route>
                            <NotFoundScreen/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default App
