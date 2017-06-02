import {USER_CHANGE, USER_SEARCH, SEARCH_FAIL, SEARCH_SUCCESS, SEARCH_USER_LOAD} from '../actions/types';


const INITIAL_STATE = {
    
    userTerm: '',
    userSearch: '',
    loading: false,
    error: ''

};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case USER_CHANGE:
            return {...state, userTerm: action.payload};
        
        case SEARCH_USER_LOAD:
            return {...state, loading: true, error: ''}
        
        case SEARCH_FAIL:
            return {    
                        ... state, 
                        error: 'No such username.',
                        loading: false
                   }
            
        case SEARCH_SUCCESS:
            return {
                        ...state,
                        userTerm: action.payload,
                        userSearch: action.payload,
                        loading: false
                   }
        
        default:
            return state;
                      
    }
}
    
    