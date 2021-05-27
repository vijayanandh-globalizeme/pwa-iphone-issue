import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmailCheckPageRoutingModule } from './email-check-routing.module';
import { EmailCheckPage } from './email-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EmailCheckPageRoutingModule
  ],
  declarations: [
    EmailCheckPage
  ]
})
export class EmailCheckPageModule {}
