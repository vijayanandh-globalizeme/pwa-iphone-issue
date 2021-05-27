import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { GymComponentRoutingModule } from "./gym-routing.module";
import { GymComponent } from "./gym.page";
import { ManualRepsComponent } from "src/app/shared/dialog-components/manual-reps/manual-reps.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymComponentRoutingModule
],
  declarations: [
    GymComponent,
    ManualRepsComponent
  ],
})
export class GymComponentModule {}
