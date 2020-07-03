import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-table-list',
  templateUrl: './product-table-list.component.html',
  styleUrls: ['./product-table-list.component.scss']
})
export class ProductTableListComponent implements OnInit {

  @Input()
  items : Product[];

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
