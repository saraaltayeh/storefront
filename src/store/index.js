import { combineReducers, createStore } from 'redux';
import cat from "./categorie";
import product from "./product";
import cart from "./cart";
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './cart'

let reducers = combineReducers({
    cat: cat,
    product: product,
    cart: cart,
    cartReducer:cartReducer
})

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();