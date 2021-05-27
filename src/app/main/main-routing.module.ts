import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'gym',
        children: [
          {
            path: '',
            loadChildren: () => import('./gym/gym.module').then(m => m.GymComponentModule)
          }
        ]
      },
      {
        path: 'daily-focus',
        children: [
          {
            path: '',
            loadChildren: () => import('./daily-focus/daily-focus.module').then(m => m.DailyFocusPageModule)
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
