import {createStore} from 'redux'
import { useProductReducer } from './reducers'


const store= createStore(useProductReducer({
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
}));

export default store
