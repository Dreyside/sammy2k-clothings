import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly submitted = signal(false);

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // In a real app we would call a backend or email API here.
    this.submitted.set(true);
    this.form.reset();
  }
}

