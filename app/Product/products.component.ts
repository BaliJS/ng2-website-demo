import { Component, OnInit } from 'angular2/core';

import { Product, ProductService } from './products.service';

@Component({
    selector: 'product-list',
    templateUrl: './app/product/products.component.html',
    directives: [] 
})

export class ProductListComponent implements OnInit {
    products: Product[];
    
    constructor(private _productService: ProductService) { }

    ngOnInit() { 
        this.products = this._productService.getProducts();
     }

}