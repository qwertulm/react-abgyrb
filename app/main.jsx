
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MenuNavContainer from './MenuNavContainer.jsx';
import About from './About.jsx';
import Team from './Team.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';

ReactDOM.render(
    <HashRouter >
        <MenuNavContainer>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/products" component={Products} />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/about/team" component={Team} />
            </Switch>
        </MenuNavContainer>
    </HashRouter >,
    document.querySelector('my-app')
);

