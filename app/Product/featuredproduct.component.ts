import { Component, OnInit } from 'angular2/core';

import { Product, ProductService } from './products.service';

@Component({
    selector: 'featured-product',
    templateUrl: './app/product/featuredproduct.component.html',
     styleUrls: ['./app/product/featuredproduct.component.css'],
    //providers: [ProductService]
})

export class FeaturedProductComponent implements OnInit {

    featuredProduct: Product;

    constructor(private _productService: ProductService) {
    }

    ngOnInit() {
        this.featuredProduct = this._productService.getFeaturedProduct();
        console.log(this.featuredProduct.name);
    }

}

