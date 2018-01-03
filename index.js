import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import ListApp from "./components/ListApp.jsx";
import EditApp from "./components/EditApp.jsx";


const App = () => (
    <div>
        <Main />
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ListApp}/>
            <Route path='/edit/:recipeId/:recipeName' component={EditApp}/>
        </Switch>
    </main>
);

ReactDOM.render((
    <Router>
        <div>
            <App />
        </div>
    </Router>
), document.getElementById('root'));
