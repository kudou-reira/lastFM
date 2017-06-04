import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import {Card, CardSingle, Input, ClickButton} from './common';
import {connect} from 'react-redux';
import axios from 'axios';
import RecentMusicInfo from './recentMusicInfo';
import update from 'immutability-helper';

class RecentMusic extends React.Component {
    
    state = { music: [] };

    componentWillMount() {
        
        axios.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + this.props.userSearch + '&api_key=c9557c25277d1ab9c742a7b91b6609bf&format=json')
            .then(response => {
                this.setState({music: response.data.recenttracks.track})
            });
            
    }


    renderTracks() {
        
        return(
            this.state.music.map((singleSong, index) => 
                <RecentMusicInfo key = {index} single = {singleSong} />
            )
            
        )
    }


    render() {
        
        return (
            <ScrollView>
                {this.renderTracks()}
            </ScrollView>
        );
        
        
    }
    
}

const mapStateToProps = state => {

    return {
        
        userSearch: state.lastFMUser.userSearch
    };
    
};


export default connect (mapStateToProps, {})(RecentMusic);