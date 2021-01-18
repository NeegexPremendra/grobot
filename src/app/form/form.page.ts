import { Component  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
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
  uemail='';
  upassword='';
  msg='';
  showPassword:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private _global: AppGlobal,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private route:ActivatedRoute,
    ) { }
  
  ngOnInit()
  {
    if(localStorage.getItem('user'))
    {
      this.router.navigate(['home']);
    }
  }
  togglePasswordText() {
    this.showPassword = !this.showPassword;
    //console.log(this.showpassword);
  }
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
    this.uemail =this.registrationForm.value.email;
    this.upassword =btoa(this.registrationForm.value.password);
    const key = localStorage.getItem('record');
    const data = { action: 'mem_login',email:this.uemail,password:this.upassword };
    const header = { headers: { Authorization: 'Bearer '+key, Deviceid: localStorage.getItem('deviceId') } };
    this.http.post(this._global.baseAppUrl, data, header).subscribe((response:any) => {
          console.log(response); 
          if (response.status === 'success') {
            localStorage.setItem('user', JSON.stringify(response.data));
            this.router.navigate(['home']);
          }
          else
          {
            this.msg = response.data.message;
            this.presentToast(this.msg);
          }
       
   })

  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  async loading(type)
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000,
      translucent: true,
   })
    await loading.present();
    await this.router.navigate([`/${type}`]);
  }

}
