import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CommonCssName } from "src/app/shared/constants";
import { ManualRepsComponent } from "src/app/shared/dialog-components/manual-reps/manual-reps.component";

@Component({
  selector: "app-gym",
  templateUrl: "./gym.page.html",
  styleUrls: ["./gym.page.scss"],
})
export class GymComponent {
  constructor(
    private modalController: ModalController,
  ) {}

  async createManualRepsModal() {
    const modal = await this.modalController.create({
      component: ManualRepsComponent,
      cssClass: CommonCssName.gymManualRepsModal,
      componentProps: {
        pqLogsType: 'audio',
      },
      mode: 'ios',
      swipeToClose: true,
    });
    return await modal.present();
  }
}
