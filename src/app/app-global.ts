import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';


@Injectable()
@NgModule({
    providers: [AppGlobal]
})
export class AppGlobal {
    readonly baseAppUrl: string = 'https://grobot.ai/api_access/api.php';
    readonly Secretkey: string = atob('RU1QVjJBUFAzSERyU092UklzMUx3VHlZ');
    readonly Deviceid: string = this.guid();
    public myToken = '';
    public jwtkey = '';

    guid()
    {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4()
    {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
   
}

