import {USER_CHANGE, SEARCH_FAIL, SEARCH_SUCCESS, SEARCH_USER_LOAD} from './types';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export const userChange = (text) => {

    return {
        
        type: USER_CHANGE,
        payload: text
        
    };
}

export const searchSuccess = (dispatch, text) => {
    
    dispatch ({

        type: SEARCH_SUCCESS,
        payload: text
        
    });
    
    Actions.musicShow();
    
}

export const searchFail = (dispatch) => {
    
    dispatch({
        type: SEARCH_FAIL
    });   
}

export const searchLastFM = (text) => {
    
    return (dispatch) => {
        dispatch({type: SEARCH_USER_LOAD});
        axios.get('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=' + text + '&api_key=c9557c25277d1ab9c742a7b91b6609bf&format=json')
            .then(response => {
                
                if(response.data.error === 6){
                    
                    searchFail(dispatch);
                    console.log('execute searchFail')
                }
            
                else{
                    searchSuccess(dispatch, text);
                }
            })
    };
    
}   