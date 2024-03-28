import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VALID_DOMAINS } from 'src/app/app-variables';
import { emailValidator } from 'src/app/shared/validators/validator-email'
import { matchPasswordsValidator } from 'src/app/shared/validators/validator-passwords';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'repeatPassword')],
      }
    ),
    email: ['', [Validators.required, emailValidator(VALID_DOMAINS)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { username, passGroup: { password, repeatPassword } = {}, email, city } = this.form.value;

    this.authService.register(username!, password!, repeatPassword!, email!, city!)
      .subscribe(() => {
        this.router.navigate(['/events']);
      });
  }
}
