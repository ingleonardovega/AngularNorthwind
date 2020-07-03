import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  @Input()
  items: Product[];

  @Output()
  edit :EventEmitter<number> = new EventEmitter<number>();

  @Output()
  delete :EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onEdit(ProductId:number):void{
    this.edit.emit(ProductId);
  }

  onDelete(ProductId:number):void{
    this.delete.emit(ProductId);
  }

}
