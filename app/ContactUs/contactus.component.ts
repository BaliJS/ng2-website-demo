import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder} from 'angular2/common';

@Component({
    selector: 'contact-us',
    template: `
        <section>
        <h2>Contact Us</h2>
      <form [ngFormModel]="aboutUsForm">
      Fullname: 
      <input [(ngModel)]="fullName" type="text" />
      <br/>
      Email:
      <input ngControl="email">
      
      </form>
      <div><b>Full Name:</b> {{fullName}}</div>
      <div><b>Email:</b> {{data}}</div>
      </section>
    `
})

export class ContactUsComponent {

    email:Control;
    aboutUsForm:ControlGroup;
    data:string;
    fullName:string;

    constructor(private fb: FormBuilder) {
        this.email = new Control();

        this.aboutUsForm = fb.group({
            email: this.email
        });

        this.email.valueChanges
            .subscribe(value => this.data = value);
    }
}

