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
                        <Route exact path="/" component={SearchScreen}/>
                        <Route path="/favorites" component={FavoriteScreen}/>
                        <Route component={NotFoundScreen} />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default App
