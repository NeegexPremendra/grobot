import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppGlobal } from '../app-global';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  private todo: FormGroup;
  private todo5: FormGroup;
  private todo6: FormGroup;
  result: Observable<any>;
  displaypass: any = false;
  displayname: any = false;
  public showpassword: boolean;
  resetmsg = '';
  otpmsg = '';
  newpassmsg = '';
  constructor(private formBuilder: FormBuilder, private _global: AppGlobal, private http: HttpClient,public toastController: ToastController) { 
    this.todo = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$")])]  
   })
         

  }

  ngOnInit() {
  }
  
  resetPass()
 {
   const output = localStorage.getItem('record');
   console.log(this.todo.value.email);

   const data = {action: 'forgot_login', email: this.todo.value.email};
   const header = {headers: { Authorization: 'Bearer ' + output, Deviceid: localStorage.getItem('deviceId')}};
   this.result = this.http.post(this._global.baseAppUrl, data, header);
   this.result.subscribe((response) => {
     console.log(response);

     if (response.status === 'success')
     {
       localStorage.setItem('resetAccessToken', response.data[0].stApiAccessToken);
       this.displayname = true;
       this.resetmsg = response.data.message;
       this.presentToast(this.resetmsg);
     }
     else{
       this.resetmsg = response.data.message;
       this.presentToast(this.resetmsg);
     }
   });
   //console.log(this.todo.value);
 }
 async presentToast(msg) {
  const toast = await this.toastController.create({
      message: msg,
      duration: 3000
  });
  toast.present();
}
}
