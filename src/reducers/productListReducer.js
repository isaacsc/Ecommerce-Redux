import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SAVE_PRODUCT_INIT,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE
} from '../actions/types'
import initialState from './initialState'

export default function productListReducer (state = initialState.productList, action) {
  switch (action.type) {

    case FETCH_PRODUCTS_INIT: 
      return {
        ...state,
        error: null,
        loading: true
      }

    case FETCH_PRODUCTS_FAILURE: 
      return {
        ...state,
        products: [],
        error: action.payload,
        loading: false
      } 

    case FETCH_PRODUCTS_SUCCESS: 
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false
      }

    case SAVE_PRODUCT_INIT: 
      return {
        ...state,
        loading: true,
        error: null
      }

    case SAVE_PRODUCT_SUCCESS: 
      return {
        ...state,
        error: action.payload,
        loading: true,
      }

    case SAVE_PRODUCT_FAILURE: 
      return {
        ...state,
        products: [...state.products, action.payload],
        error: null,
        loading: true,
      }

    default:
      return state;
  }
}