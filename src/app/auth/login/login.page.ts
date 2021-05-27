import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ValidationPattern } from '../../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  fieldTextType: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(ValidationPattern.email)]],
      password: ['', [Validators.required]],
    })
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  submitLoginForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    }
    this.navigateToDailyFocus();
  }

  private navigateToDailyFocus() {
    this.router.navigate(["/main/gym"]);
  }

}
