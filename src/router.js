import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import UserEnter from './components/userEnter';
import MusicShow from './components/musicShow';

const RouterComponent = () => {

    return (
        <Router sceneStyle = {{paddingTop: 60}}>
            <Scene key = "userFind">
                <Scene key = "search" component = {UserEnter} title = "last.FM searcher" initial />
            </Scene>
        
            <Scene key = "musicShow">
                <Scene
                    key = "listMusic"
                    component = {MusicShow}
                    title = "Top 50 Artists/Songs"
                />
            </Scene>
        </Router>

    );

};

export default RouterComponent;