import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GymComponent } from "./gym.page";

const routes: Routes = [
  {
    path: "",
    component: GymComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymComponentRoutingModule {}
