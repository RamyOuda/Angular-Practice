import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  practiceForm!: FormGroup;

  formValues: any;

  ngOnInit() {
    this.practiceForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: '',
      checkbox: true,
    });
  }

  populateTestData(): void {
    this.practiceForm.patchValue({
      firstName: 'Ramy',
      lastName: 'Ouda',
      checkbox: false,
    });
  }

  submit(): void {
    this.formValues = {
      'First Name': this.practiceForm.get('firstName')?.value,
      'Last Name': this.practiceForm.get('lastName')?.value,
      Address: this.practiceForm.get('address')?.value,
      Checkbox: this.practiceForm.get('checkbox')?.value,
    };
  }
}
