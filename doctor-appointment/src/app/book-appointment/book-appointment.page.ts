import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {

constructor(public FormBuilder : FormBuilder) { }
  ngOnInit() {
  }
get name() {
  return this.bookappointment.get('name');
}
get number() {
  return this.bookappointment.get('number');
}

public errorMessages = {
    name: [
      	{ type: 'required', message: 'name is required' },
      	{ type: 'pattern', message: 'Please enter a valid name number' }
    ],
    number: [
      { type: 'required', message: 'number is required' }
    ]
  };

bookappointment = this.FormBuilder.group({
    name: ['', Validators.required],
    number: ['', Validators.required],   
  });
  

  public submit() {
	  console.log(this.bookappointment.value);
    
	}
}
