import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { AppGlobal } from './app-global';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  data: Observable<any>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private _global: AppGlobal,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit()
  {
    if( localStorage.getItem('deviceId') == null )
    {
      localStorage.setItem('deviceId',this._global.Deviceid);
    }
    // console.log(this._global.Secretkey);
    // console.log(this._global.baseAppUrl);
    if(localStorage.getItem('record') == null )
    {
      const data = { action: 'api_connect' };
    const header = { headers: { Secretkey: this._global.Secretkey, Deviceid: localStorage.getItem('deviceId') } };
    this.data = this.http.post(this._global.baseAppUrl, data, header);
      this.data.subscribe((response) => 
      {
        console.log(response.data.JwtKey);
        if(response.status == 'success')
        {
            localStorage.setItem('record', response.data.JwtKey);
        }
      });
    }
    
  }

}
