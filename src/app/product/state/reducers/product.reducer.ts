import { Product } from '../../models/product';
import * as ProductActions from '../actions/product.actions';

export interface State{
    products : Product[];
    totalRecords: number;
    product :Product
}

const initialState: State = {
    products: [],
    totalRecords: 0,
    product : new Product()
    
};

export function ProductReducer(state = initialState,action:ProductActions.Actions){
    switch(action.type){
        case ProductActions.ProductActionType.LoadProducts:
            return state;
        case ProductActions.ProductActionType.LoadProductsComplete:
            return{
                ...state,
                products :action.payload.data,
                totalRecords :action.payload.totalRecords
            }
        case ProductActions.ProductActionType.GetProductById:
            return state;
        case ProductActions.ProductActionType.GetProductByIdComplete:
            return {
                ...state,
                product : action.payload
            }
        case ProductActions.ProductActionType.UpdateProduct: {
            return state;
        }
        case ProductActions.ProductActionType.UpdateProductComplete: {
            return state;
        }
        case ProductActions.ProductActionType.DeleteProduct: {
            return state;
        }
        case ProductActions.ProductActionType.DeleteProductComplete:{
            return state;
        }
        case ProductActions.ProductActionType.AddProduct:{
            return state;
        }
        case ProductActions.ProductActionType.AddProductComplete:{
            return state;
        }
        default:
                return state;
    }
}

export const getProducts = (state:State)=>state.products;
export const getTotalRecors = (state:State)=>state.totalRecords;
export const getProduct = (state:State)=>state.product;