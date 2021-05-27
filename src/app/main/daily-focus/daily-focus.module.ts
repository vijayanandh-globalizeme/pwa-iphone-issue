import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DailyFocusPageRoutingModule } from './daily-focus-routing.module';
import { DailyFocusPage } from './daily-focus.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyFocusPageRoutingModule,
  ],
  declarations: [
    DailyFocusPage,
  ],
})
export class DailyFocusPageModule { }
