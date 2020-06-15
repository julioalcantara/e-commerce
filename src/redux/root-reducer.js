import { combineReducers } from 'redux';

import userReducuer from './user/user-reducer';

export default combineReducers ({
    user: userReducuer
}); 