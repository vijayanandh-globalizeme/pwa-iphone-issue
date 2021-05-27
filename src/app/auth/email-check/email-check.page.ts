import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationExtras } from "@angular/router";
import {
  ValidationPattern,
} from "../../shared/constants";

@Component({
  selector: "app-email-check",
  templateUrl: "./email-check.page.html",
  styleUrls: ["./email-check.page.scss"],
})
export class EmailCheckPage implements OnInit {
  emailCheckForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.emailCheckForm = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.pattern(ValidationPattern.email)],
      ],
    });
  }

  get validationErrorControl() {
    return this.emailCheckForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.emailCheckForm.valid) {
      return false;
    }
    let navigationExtra: NavigationExtras = {
      
    };
    this.router.navigateByUrl("/auth/login");
  }

}
