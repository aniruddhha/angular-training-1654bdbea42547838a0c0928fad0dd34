import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fg : FormGroup // group of form controls/input boxes is called form

  constructor(
    private fb : FormBuilder // helper class for creating the form
  ) { 
    this.fg = fb.group({
      userName : fb.control('', [Validators.required]),
      password : fb.control('', [Validators.required]),
      age : fb.control(''),
      email: fb.control('', [Validators.required])
    }) // your form is nothing but group of controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`Form Submitted`)
    console.log(this.fg)
    console.log(this.fg.value)
  }

  getUserName() : FormControl {
    return this.fg.get('userName') as FormControl
  }

  getPassword() : FormControl {
    return this.fg.get('password') as FormControl
  }
  getEmail() : FormControl {
    return this.fg.get('email') as FormControl
  }
  // if one control is invalid whole form is invalid
}
