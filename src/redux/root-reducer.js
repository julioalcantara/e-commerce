import { combineReducers } from 'redux';

import userReducuer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers ({
    user: userReducuer,
    cart: cartReducer
}); 