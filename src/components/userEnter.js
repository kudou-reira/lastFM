import React from 'react';
import {Text, Image, View, Linking, TouchableOpacity} from 'react-native';
import {Card, CardSingle, Input, ClickButton, Loader} from './common';
import {connect} from 'react-redux';
import {userChange, searchLastFM} from '../actions';

class UserEnter extends React.Component {
    
    onUserNameChange(text){
        
        this.props.userChange(text);
        
    }
    
    onButtonPress() {
        
        this.props.searchLastFM(this.props.userTerm);
        
    }
    
    renderLoader() {
        if(this.props.loading){
            return <Loader size = "large" />;
        }
    }
    
    renderNotice() {
        
        if(this.props.error !== ''){
            
            return(
                
                <CardSingle>
                    <TouchableOpacity onPress = {this.handleClick}>
                        <View>
                            <Text style = {styles.errorNoticeStyle}>
                                If you do not have last.fm account, you can sign up for one by tapping here.
                            </Text>
                        </View>
                    </TouchableOpacity>
                </CardSingle>
            )
        }
    }
    
    renderTips() {
        
        if(this.props.error !== ''){
            
            return(
                
                <CardSingle>
                    <View>
                        <Text style = {styles.errorNoticeStyle}>
                            After making an account, make sure to download the lastFM audioscrobbler and use it with your favorite music player to record your most listened songs!
                        </Text>
                    </View>
                </CardSingle>
            )
        }
        
    }
    
    renderGuide() {
        
        if(this.props.error === ''){
            
            return(
                <CardSingle>
                    <TouchableOpacity onPress = {this.handleClickText}>
                        <View>
                            <Text style = {styles.errorNoticeStyle}>
                                This is an application that works with the lastFM API to find a certain user's' music history. Tap here to see the lastFM website!
                            </Text>
                        </View>
                    </TouchableOpacity>
                </CardSingle>
            )
        }
        
    }
    
    handleClick() {
        Linking.openURL("https://www.last.fm/join");
    }
    
    handleClickText() {
        Linking.openURL("https://www.last.fm/");
    }
    
    
    
    render() {
        
        return (
            <Card>
                <CardSingle>
                            <Image 
                                style={styles.titlePicStyle}
                                source={{uri: 'https://transientwriting.files.wordpress.com/2008/10/last-fm-logo.png'}}
                                resizeMode =  {Image.resizeMode.center}
                            />
                </CardSingle>
            
                <CardSingle>
                    <Input
                        desc = "lastFM username"
                        hold = "for example: kasuka17"
                        onChangeText = {this.onUserNameChange.bind(this)}
                        value = {this.props.userTerm}
                    />
                </CardSingle>

                <CardSingle>
                    <ClickButton onPress = {this.onButtonPress.bind(this)}>
                        Find music history!
                    </ClickButton>
                    {this.renderLoader()}
                    <Text style = {styles.errorTextStyle} >
                        {this.props.error}
                    </Text>
                    
                </CardSingle>
                
                {this.renderGuide()}
                {this.renderNotice()}
                {this.renderTips()}
                
                
            </Card>
        
        )
    }
    
}

const styles = {
    
    titlePicStyle: {
        width: 100,
        height: 100,
        flex: 1
    },
    errorTextStyle: {

        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    errorNoticeStyle: {

        fontSize: 15,
        alignSelf: 'center',
        color: 'red'
    }
    
}

const mapStateToProps = state => {

    return {
        
        userTerm: state.lastFMUser.userTerm,
        userSearch: state.lastFMUser.userSearch,
        loading: state.lastFMUser.loading,
        error: state.lastFMUser.error
    };
    
};



export default connect (mapStateToProps, {userChange, searchLastFM})(UserEnter);