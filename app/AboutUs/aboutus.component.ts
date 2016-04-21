import { Component, OnInit} from 'angular2/core';
import { ContactUsComponent } from '../contactus/contactus.component';

@Component({
    selector: 'about-us',
    templateUrl: './app/aboutus/aboutus.component.html',
    directives: [ContactUsComponent] 
})

export class AboutUsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}