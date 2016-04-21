import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HomeComponent],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/aboutus', name: 'AboutUs', component: AboutUsComponent }
])
export class AppComponent {
    public storeName: string = "BaliJS Bakery";
    public welcomeText: string = `Welcome to ${this.storeName}!`;
}