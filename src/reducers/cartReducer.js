import {
  LOAD_CART_ITEMS,
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS
} from '../actions/types'
import initialState from './initialState'

export default function productListReducer (state = initialState.activeProduct, action) {
  switch (action.type) {

    case LOAD_CART_ITEMS: 
      return {
        ...state,
        items: [...state.items]
      }

    case ADD_CART_ITEMS: 
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      }

    case REMOVE_CART_ITEMS: 
      const searchItem = (elem) => elem._id === action.payload._id;
      const item = state.items.find(searchItem);
      const index = state.items.findIndex(searchItem);
      
      return {
        ...state,
        items: [
          ...state.items.slice(0, index), 
          ...state.items.slice(index + 1)  
        ],
        total: state.total - action.payload.price
      }
      
    default:
      return state;
  }
}