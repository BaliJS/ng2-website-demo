import { Component, OnInit, Directive, Input  } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

import { FeaturedProductComponent } from '../product/featuredproduct.component';
import { ProductListComponent } from '../product/products.component';
import { ProductService } from '../product/products.service';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES, FeaturedProductComponent, ProductListComponent],
    providers: [ProductService]
})

export class HomeComponent implements OnInit {
    
    public welcomeText: string = `Welcome to BaliJS Bakery!`;
    
    constructor() { }

    ngOnInit() { }

}