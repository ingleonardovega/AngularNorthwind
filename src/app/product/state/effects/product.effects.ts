import { Injectable } from "@angular/core";
import { ProductService } from '../../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from '../actions/product.actions';
import { switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class ProductEffects {
    constructor(private productService: ProductService,
        private actions$: Actions,
        private router:Router) { }
    @Effect()
    getProducts$ = this.actions$.pipe(
        ofType<productActions.LoadProducts>(productActions.ProductActionType.LoadProducts),
        switchMap(action => this.productService.getProducts(action.request)
            .pipe(
                map(data => new productActions.LoadProductsComplete(data))
            ))
    );
    @Effect()
    getProductById$ = this.actions$.pipe(
        ofType<productActions.GetProductById>(productActions.ProductActionType.GetProductById),
        switchMap(action=>this.productService.getProductById(action.ProductId)
                            .pipe(
                                map(data=> new productActions.GetProductByIdComplete(data))
                            ))    
    );
    @Effect()
    updateProduct$ = this.actions$.pipe(
        ofType<productActions.UpdateProduct>(productActions.ProductActionType.UpdateProduct),
        switchMap(action=>this.productService.updateProduct(action.request)
        .pipe(
            map(_=> {
                this.router.navigate(['product/list'])
              return new productActions.UpdateProductComplete()  
            }
        )))
    );
    @Effect()
    deleteProduct$ = this.actions$.pipe(
        ofType<productActions.DeleteProduct>(productActions.ProductActionType.DeleteProduct),
        switchMap(action=>this.productService.deleteProduct(action.ProjectId)
        .pipe(
            map(_=> {
              return new productActions.DeleteProductComplete()  
            }
        )))
    );
    @Effect()
    addProduct$ = this.actions$.pipe(
        ofType<productActions.AddProduct>(productActions.ProductActionType.AddProduct),
        switchMap(action=>this.productService.addProduct(action.request)
        .pipe(
            map(_=> {
                this.router.navigate(['product/list'])
              return new productActions.AddProductComplete()  
            }
        )))
    );
    @Effect()
    getBestSellers$ = this.actions$.pipe(
        ofType<productActions.GetBestSellers>(productActions.ProductActionType.GetBestSellers),
        switchMap(action => this.productService.getBestSellers()
            .pipe(
                map(data => new productActions.GetBestSellersComplete(data))
            ))
    );
}