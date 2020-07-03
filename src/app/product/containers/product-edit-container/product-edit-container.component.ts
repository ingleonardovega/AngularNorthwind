import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as fromReducer from '../../state/reducers';
import { Store } from '@ngrx/store';
import * as productActions from '../../state/actions/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
interface ProductEditData{
  ProductId : number;
}

@Component({
  selector: 'app-product-edit-container',
  templateUrl: './product-edit-container.component.html',
  styleUrls: ['./product-edit-container.component.scss']
})
export class ProductEditContainerComponent implements OnInit {

  product$ : Observable<Product> = this.store.select(fromReducer.getProduct);
  constructor(@Inject(MAT_DIALOG_DATA) private data:ProductEditData,
  private dialogRef : MatDialogRef<ProductEditContainerComponent>,
  private store : Store<fromReducer.ProductState>) {
      this.store.dispatch(new productActions.GetProductById(data.ProductId))
   }
 
  ngOnInit() {
  }

  onEdit(product: Product): void {
    this.store.dispatch(new productActions.UpdateProduct(product));
    this.dialogRef.close();
  }

}
