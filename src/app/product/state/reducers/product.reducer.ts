import { Product } from '../../models/product';
import * as ProductActions from '../actions/product.actions';
import { ProductBestSeller } from '../../models/best-seller';

export interface State{
    products : Product[];
    totalRecords: number;
    product :Product;
    bestSellers: ProductBestSeller[];
}

const initialState: State = {
    products: [],
    totalRecords: 0,
    product : new Product(),
    bestSellers:[]
    
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
        case ProductActions.ProductActionType.GetBestSellers:{
            return state;
        }
        case ProductActions.ProductActionType.GetBestSellersComplete:{
            return{
                ...state,
                bestSellers :action.payload
            };
        }
        default:
                return state;
    }
}

export const getProducts = (state:State)=>state.products;
export const getTotalRecors = (state:State)=>state.totalRecords;
export const getProduct = (state:State)=>state.product;
export const getProductBestSellers = (state:State)=>state.bestSellers;