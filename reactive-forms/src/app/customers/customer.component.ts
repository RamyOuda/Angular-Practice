import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  // declare the name of FormGroup
  customerForm!: FormGroup;

  customer = new Customer();

  constructor() {}

  ngOnInit(): void {
    // When the page is loaded, set customerForm to be a new FormGroup
    this.customerForm = new FormGroup({
      // Add a FormControl for each input in the form
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
