import { Component  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, Platform, ToastController ,LoadingController ,AlertController} from '@ionic/angular';
import { AppGlobal } from '../app-global';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  result: Observable<any>;
  data: Observable<any>;
  stMobileNumber='';
  DeviceID:string = '';
  applist:any=[];
  apkList:any=[];
  nameArr='';
  appname='';
  constructor(
    private formBuilder: FormBuilder,
    private _global: AppGlobal,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private router: Router
    ) { }
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
      { type: 'required', message: 'Please enter vaild Email '}
    ]
    ,
   password: [
      { type: 'required', message: 'Please Enter password'}
    ]
  }

  registrationForm = this.formBuilder.group({
    password: ['',Validators.compose([Validators.required])],
    email: ['',Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$")])]});
 
  
  public submit() {
    console.log(this.registrationForm.value);
  }

}
