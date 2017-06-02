import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Router from './router';
import ReduxThunk from 'redux-thunk';

class App extends React.Component{
    
    render() {
        
        return (
        
          <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />
          </Provider>
        ); 
    }
    
};
        
export default App;