import React from 'react';

import {
    Route,
    Link, 
    Switch
} from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleCodepen from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import FriendsApp from '../apps/friends-list-app/FriendsApp';
import NytApp from '../apps/nyt-app/NytApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import Video from '../apps/YouTubeApi/Video';
import Bitcoin from '../apps/bitcoin-api-app';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to="/classcomponent">Class Component</Link></li>
                <li><Link to="/propsdemo">Props Demo</Link></li>
                <li><Link to="/lifecyclediagram">Life Cycle Diagram</Link></li>
                <li><Link to="/timer">Timers</Link></li>
                <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li>
                <li><Link to="/nytapp">New York Times App</Link></li>
                <li><Link to='/friendslist'>Friends List App</Link></li>
                <li><Link to='/movie'>Movie Search App</Link></li>
                <li><Link to='/video'>Youtube Video Search</Link></li>
                <li><Link to ='/bitcoin'>30 Day Bitcoin Prices</Link></li>
                <li><Link to="/resources">Resources</Link></li>

            </ul>
        </div>

        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /> </Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
                <Route exact path="/propsdemo"><PropsDemo /></Route>
                <Route exact path="/lifecyclediagram"><LifeCycleCodepen /></Route>
                <Route exact path="/timer"><TimePiecesApp /></Route>
                <Route exact path="/reactconceptlist"><ReactConceptsApp /></Route>
                <Route exact path="/friendslist"><FriendsApp /></Route>
                <Route exact path="/nytapp"><NytApp /></Route>
                <Route exact path="/movie"><MovieSearchApp /></Route>
                <Route exact path="/video"><Video /></Route>
                <Route exact path="/bitcoin"><Bitcoin /></Route>
            </Switch>
        </div>
    </div>
)

export default Sidebar;
