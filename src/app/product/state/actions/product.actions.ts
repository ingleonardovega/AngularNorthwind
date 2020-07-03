import { Action } from '@ngrx/store';
import { GetProduct } from '../../models/get-product';
import { ProductList } from '../../models/product-list';
import { Product } from '../../models/product';


export enum ProductActionType {
    LoadProducts = '[Product] Load Products',
    LoadProductsComplete = '[Product] Load Products Complete',
    GetProductById = '[Product] Get Product By Id',
    GetProductByIdComplete = '[Product] Get Product By Id Complete',
    UpdateProduct = '[Product] Update Product',
    UpdateProductComplete = '[Product] Update Product Complete',
    DeleteProduct = '[Product] Delete Product',
    DeleteProductComplete = '[Product] Delete Product Complete',
    AddProduct = '[Product] Add Product',
    AddProductComplete = '[Product] Add Product Complete'
}

export class LoadProducts implements Action {
    readonly type = ProductActionType.LoadProducts;
    constructor(public request: GetProduct) { }
}

export class LoadProductsComplete implements Action {
    readonly type = ProductActionType.LoadProductsComplete;
    constructor(public payload: ProductList) { }
}

export class GetProductById implements Action {
    readonly type = ProductActionType.GetProductById;
    constructor(public ProductId:number){} 
}

export class GetProductByIdComplete implements Action{
    readonly type = ProductActionType.GetProductByIdComplete;
    constructor(public payload: Product){}
}

export class UpdateProduct implements Action{
    readonly type = ProductActionType.UpdateProduct;
    constructor(public request : Product){}
}

export class UpdateProductComplete implements Action{
    readonly type = ProductActionType.UpdateProductComplete;
    constructor (){}
}

export class DeleteProduct implements Action{
    readonly type = ProductActionType.DeleteProduct;
    constructor(public ProjectId: number){}
}
export class DeleteProductComplete implements Action{
    readonly type = ProductActionType.DeleteProductComplete;
    constructor(){}
}

export class AddProduct implements Action {
    readonly type = ProductActionType.AddProduct;
    constructor(public request: Product) { }
}
export class AddProductComplete implements Action {
    readonly type = ProductActionType.AddProductComplete;
    constructor() { }
}


export type Actions = LoadProducts | LoadProductsComplete | 
    GetProductById | GetProductByIdComplete | 
    UpdateProduct | UpdateProductComplete | 
    DeleteProduct | DeleteProductComplete | 
    AddProduct | AddProductComplete;