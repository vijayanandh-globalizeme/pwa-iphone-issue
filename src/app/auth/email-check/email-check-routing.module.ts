import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailCheckPage } from './email-check.page';

const routes: Routes = [
  {
    path: '',
    component: EmailCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailCheckPageRoutingModule {}
