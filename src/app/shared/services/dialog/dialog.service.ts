import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ValidationPattern } from "../../constants";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(public alertController: AlertController) {}

  async basic(header = "success", message, buttons = ["OK"]) {
    const alert = await this.alertController.create({
      cssClass: header ? "basic-alert" : "basic-alert d-none",
      mode: "ios",
      header: header,
      message: message,
      buttons: buttons,
    });
    await alert.present();
  }

  async confirm(
    header = "success",
    message,
    buttons = ["OK", "Cancel"],
    handler
  ) {
    const alert = await this.alertController.create({
      cssClass: "confirm-alert",
      mode: "ios",
      header: header,
      message: message,
      buttons: [
        {
          text: buttons[0],
          role: "cancel",
          cssClass: "alert-button-cancel",
          handler: () => {
            handler(false);
          },
        },
        {
          text: buttons[1],
          cssClass: "alert-button",
          handler: () => {
            handler(true);
          },
        },
      ],
    });

    await alert.present();
  }

  async validateEmail(header = "success", message, handler) {
    const alert = await this.alertController.create({
      cssClass: "input-alert",
      mode: "ios",
      header: header,
      message: message,
      inputs: [
        {
          name: "emailaddress",
          type: "email",
          cssClass: "input-type-inputbox",
          placeholder: "email@example.com",
        },
      ],
      buttons: [
        {
          text: "GO",
          cssClass: "input-type-inputbox-go",
          handler: (data) => {
            let validateObj = this.validateEmailPattern(data.emailaddress);
            if (!validateObj.isValid) {
              return false;
            } else {
              let res = data.emailaddress;
              handler(res);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  private validateEmailPattern(emailaddress) {
    if (ValidationPattern.validateemail.test(emailaddress)) {
      return {
        isValid: true,
        message: "",
      };
    } else {
      return {
        isValid: false,
        message: "Email address is required",
      };
    }
  }

  async gymAlert(header = "success", message, buttons = ["OK"]) {
    const alert = await this.alertController.create({
      cssClass: header ? "gym-alert" : "gym-alert d-none",
      mode: 'ios',
      header: header,
      message: message,
      buttons: buttons,
    });
    await alert.present();
  }
}
