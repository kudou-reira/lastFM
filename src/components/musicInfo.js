import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import {Card, CardSingle, Input, ClickButton, Loader} from './common';

const MusicInfo = (props) => {
    
    //cardSingle makes sure that each individual shows properly
    return (
    
        <Card>
        
            
            <CardSingle>
                <View style = {styles.thumbnailHoldStyle}>
                    <Image style = {styles.thumbnailStyle} 
                        source = {{uri: props.single.image[3]['#text']}} 
                    />
                </View>
        
                <View style = {styles.cardSingleStyle}>
                    <Text style = {styles.cardTextStyle}>#{props.single['@attr'].rank}</Text>
                    <Text style = {styles.cardTextStyle}>{props.single.name}</Text>
                    <Text>{props.single.artist.name}</Text>
                    <Text>Play Count: {props.single.playcount}</Text>
                </View>
                
            </CardSingle>
        
            
            <CardSingle>
                <ClickButton onPress={() => Linking.openURL(`https://www.youtube.com/results?search_query=${props.single.name} ${props.single.artist.name}`)}>
                    Search on YouTube
                </ClickButton>
            </CardSingle>
        </Card>
    
    );
    
};

const styles = {
    
    cardSingleStyle: {
        
        flexDirection: "column",
        justifyContent: "space-around"
        
    },
    cardTextStyle: {
        
        fontSize: 18
        
    },
    thumbnailStyle: {
        
        height: 100,
        width: 100
        
    },
    thumbnailHoldStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    albumStyle: {
        
        height: 200,
        flex: 1,
        width: null
        
    }
    
}


export default MusicInfo;