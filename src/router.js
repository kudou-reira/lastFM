import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import UserEnter from './components/userEnter';
import MusicShow from './components/musicShow';
import RecentMusic from './components/recentMusic';

const RouterComponent = () => {

    return (
        <Router sceneStyle = {{paddingTop: 60}}>
            <Scene key = "userFind">
                <Scene key = "search" component = {UserEnter} title = "last.FM searcher" initial />
                <Scene
                    key = "musicShow"
                    component = {MusicShow}
                    title = "Top 50 Songs/Tracks"
                    onRight = {() => Actions.recentMusic()}
                    rightTitle = "Recents"
                />
                <Scene key = "recentMusic" component = {RecentMusic} title = "Recent Tracks" />
            </Scene>

            
        </Router>

    );

};

export default RouterComponent;