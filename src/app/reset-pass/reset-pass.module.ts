import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetPassPageRoutingModule } from './reset-pass-routing.module';
import { ResetPassPage } from './reset-pass.page';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ResetPassPageRoutingModule
  ],
  declarations: [ResetPassPage, FooterComponent]
})
export class ResetPassPageModule {}
