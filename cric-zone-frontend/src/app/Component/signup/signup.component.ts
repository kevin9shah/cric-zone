import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { 'mismatch': true };
  }

  get f() { return this.signupForm.controls; }

  get passwordError() {
    const password = this.f['password'];
    if (password.errors) {
      if (password.errors['required']) return 'Password is required';
      if (password.errors['minlength']) return 'Password must be at least 8 characters';
      if (password.errors['pattern']) return 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character';
    }
    return '';
  }

  get confirmPasswordError() {
    const confirmPassword = this.f['confirmPassword'];
    if (confirmPassword.errors) {
      if (confirmPassword.errors['required']) return 'Please confirm your password';
      if (this.signupForm.errors?.['mismatch']) return 'Passwords do not match';
    }
    return '';
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      // TODO: Implement actual signup logic here
      console.log('Signup form submitted:', this.signupForm.value);
      // this.router.navigate(['/dashboard']);
    }
  }
}
