import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyFocusPage } from './daily-focus.page';
const routes: Routes = [
  {
    path: '',
    component: DailyFocusPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyFocusPageRoutingModule {}
