import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ToastController ,LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {}
  
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


  logout()
{
    localStorage.removeItem('user');
    localStorage.removeItem('activity');
   
   // //localStorage.clear();
    let msg='You Have Logout Successfully..';
    this.presentToast(msg);
    this.router.navigate(['form']);
    //window.location.href="/start-login-page";
}

async presentToast(msg) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });
  toast.present();

}

}
