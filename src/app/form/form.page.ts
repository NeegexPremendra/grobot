import { Component  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  constructor(private formBuilder: FormBuilder) { }
  // get name() {
  //   return this.registrationForm.get("name");
  // }
  get email() {
    return this.registrationForm.get("email");
  }
  get password() {
    return this.registrationForm.get("password");
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required'},
      { type: 'required', message: 'Please enter vaild Email '}
    ]
    ,
   password: [
      { type: 'required', message: 'Password   is required'},
      { type: ' required', message: 'Please Enter password'}
    ]
  }

  registrationForm = this.formBuilder.group({
    password: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$")]]
    
  });
 
  
  public submit() {
    console.log(this.registrationForm.value);
  }

}
