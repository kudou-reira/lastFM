import {combineReducers} from 'redux';

import lastFMReducer from './lastFMReducer';

export default combineReducers({
    
   lastFMUser: lastFMReducer

});