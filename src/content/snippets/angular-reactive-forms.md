---
title: "Angular Reactive Forms Best Practices"
description: "Typed reactive forms in Angular 14+: FormGroup, validators, and dynamic controls."
pubDate: "2026-04-01"
tags: ["angular", "forms", "typescript"]
---

```typescript
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="Email" />
      <div *ngIf="email?.invalid && email?.touched">
        {{ email?.hasError('required') ? 'Required' : 'Invalid email' }}
      </div>
      <input formControlName="password" type="password" />
      <button [disabled]="form.invalid">Login</button>
    </form>
  `
})
export class LoginFormComponent {
  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  get email() { return this.form.get('email'); }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value); // fully typed!
    }
  }
}
```
