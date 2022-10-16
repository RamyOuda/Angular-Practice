import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  practiceForm!: FormGroup;

  ngOnInit() {
    this.practiceForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      checkbox: new FormControl(true),
    });
  }
}
