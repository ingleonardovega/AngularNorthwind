import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnChanges {

  @Input()
  product : Product;

  @Output()
  edit : EventEmitter<Product> = new EventEmitter<Product>();

  productEditForm : FormGroup;
  categories : KeyValue<string, string> = this.buildCategories(); 

  constructor(private fb:FormBuilder) {
  }
  
  ngOnChanges(changes: SimpleChanges):void{
    if (changes.product && changes.product.currentValue){
      this.buildProductEditForm();
    }
  }

  ngOnInit() {
  }

  buildProductEditForm():void{
    this.productEditForm = this.fb.group({
      ProductCode : [this.product.ProductCode,[Validators.required]],
      ProductName : [this.product.ProductName,[Validators.required]],
      Category : [this.product.Category,[Validators.required]],
      Description : [this.product.Description,[Validators.required]],
      StandardCost : [this.product.StandardCost,[Validators.required]],
      ListPrice : [this.product.ListPrice,[Validators.required]], 
    });
  }

  onEdit(): void{
    if(this.productEditForm.valid){
      if (this.productEditForm.dirty){
        const editedProduct = {...this.product, ...this.productEditForm.value};
        this.edit.emit(editedProduct)
      }
    }
  }

  buildCategories():any {
    return [
      { key: 'Baked Goods & Mixes', value: 'Baked Goods & Mixes' },
      { key: 'Beverages', value: 'Beverages' },
      { key: 'Candy', value: 'Candy' },
      { key: 'Canned Fruit & Vegetables', value: 'Canned Fruit & Vegetables' },
      { key: 'Canned Meat', value: 'Canned Meat' },
      { key: 'Cereal', value: 'Cereal' },
      { key: 'Chips, Snacks', value: 'Chips, Snacks' },
      { key: 'Condiments', value: 'Condiments' },
      { key: 'Grains', value: 'Grains' },
      { key: 'Oil', value: 'Oil' },
      { key: 'Pasta', value: 'Pasta' },
      { key: 'Sauces', value: 'Sauces' },
      { key: 'Soups', value: 'Soups' }
    ];
  }
}
