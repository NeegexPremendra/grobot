import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router'; 
import { LoadingController , Platform, ToastController } from "@ionic/angular";
import { AppGlobal } from '../app-global'; 
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  dataLoaded:boolean= false;
  no=0;
  showPrev:boolean=false;
  prev:number=0;
  next:number=0;
  subscribe: any;
  arr=[];
  activity:any=[];
  x=1;
  user='';
  msg='';
  accessToken='';
  memFname='';
  memLname='';
  constructor( 
    public http: HttpClient,
    private _global: AppGlobal,
    private toastCtrl: ToastController,
    private router: Router ) {}
   
  doRefresh(event) {
    
    //alert('Begin async operation');

    setTimeout(() => {
      //alert('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit()
  {
     this.user =JSON.parse(localStorage.getItem('user'));
     if(this.user)
     {
        this.accessToken=this.user['memApiAccessToken'];
        this.memFname = this.user['memFname'];
        this.memLname = this.user['memLname'];
        this.getActivity(this.accessToken);
     }
   
  }

  getActivity(token)
  {
        const key = localStorage.getItem('record');
        const data = { action: 'activity_dashboard',accessToken:token,startFrom:0,maxResult:6};
        const header = { headers: { Authorization: 'Bearer '+key, Deviceid: localStorage.getItem('deviceId') } };
        this.http.post(this._global.baseAppUrl, data, header).subscribe((res:any) => {
              console.log(res); 
              if (res.status === 'success') {
                this.dataLoaded=true;
                let str=JSON.parse(JSON.stringify(res));
                
                localStorage.setItem('activity', JSON.stringify(res.data));
                this.activity =JSON.parse(JSON.stringify(res.data));
                for (var i = 0; i < str['data'].length; i++)
				{	
                    console.log(str['data'][i]);
                    console.log(str['data'][i].toLeadId);
                    console.log(str['data'][i]['toLeadId']);
					if(str['data'][i].toLeadId != '')
					{
						
						// document.getElementById("ActivitiesList").innerHTML='<li class="hvr-shutter-out-horizontal hvr-icon-wobble-horizontal"><div class="row align-items-center justify-contents-center"><div class="col-2 pl-0"><span class="p-2 rounded"><i class="fas fa-user-edit fa-2x hvr-icon"></i></span></div><div class="col-10 pr-1 pl-0"><div class="title_list col-md-12 pr-0 pl-0"><a href="https://grobot.ai/member/leads.php" target="_blank">'+str['data'][i].toFname+' '+str['data'][i].toLname+' </a>  '+str['data'][i].notificationComment+' </div></div></div><div class="clearfix"></div></li>';
						//<div class="col-2 text-right"><i class="fas fa-times"></i></div>
					}
					else if(str['data'][i].toCamId != '')
					{
						
						$("#ActivitiesList").append('<li class="hvr-bounce-to-right hvr-icon-rotate"><div class="row align-items-center justify-contents-center"><div class="col-2 pl-0"><span class="p-2 rounded"><i class="fas fa-chart-line fa-2x hvr-icon"></i></span></div><div class="col-10 pr-1 pl-0"><div class="title_list col-md-12 pr-0 pl-0">'+str['data'][i].notificationComment+'<a href="https://grobot.ai/member/campaign.php" target="_blank">'+str['data'][i].camTitle+'</a></div></div></div><div class="clearfix"></div></li>');
					}
					else if(str['data'][i].emailID != '')
					{
						
						$("#ActivitiesList").append('<li class="hvr-bounce-to-top hvr-icon-up"><div class="row align-items-center justify-contents-center"><div class="col-2 pl-0"><span class="p-2 rounded"><i class="far fa-envelope fa-2x hvr-icon"></i></span></div><div class="col-10 pr-1 pl-0"><div class="title_list col-md-12 pr-0 pl-0">'+str['data'][i].notificationComment+'<a href="https://grobot.ai/member/campaign.php" target="_blank">'+str['data'][i].from_email+'</a></div></div></div><div class="clearfix"></div></li>');
					}
					else if(str['data'][i].smsID != '')
					{
						
						$("#ActivitiesList").append('<li class="hvr-bounce-to-bottom hvr-icon-pulse"><div class="row align-items-center justify-contents-center"><div class="col-2 pl-0"><span class="p-2 rounde"><i class="fas fa-sms fa-2x hvr-icon"></i></span></div><div class="col-10 pr-1 pl-0"><div class="title_list col-md-12 pr-0 pl-0">'+str['data'][i].notificationComment+'<a href="https://grobot.ai/member/campaign.php" target="_blank">'+str['data'][i].from_sms+'</a></div></div></div><div class="clearfix"></div></li>');
					}
				}
              }
              else
              {
                this.msg = res.data.message;
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

  }


