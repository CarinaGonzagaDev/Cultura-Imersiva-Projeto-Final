import { Component, Input, Output, EventEmitter, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
// import { NgIf } from '@angular/common'; <--- REMOVIDO

@Component({
  selector: 'app-registration-dialog',
  standalone: true,
  imports: [FormsModule, FormFieldComponent],
  templateUrl: './registration-dialog.component.html',
  styleUrl: './registration-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationDialogComponent {
  // --- ENTRADAS (Signals e Funções do App Component) ---
  @Input({ required: true }) username!: () => string;
  @Input({ required: true }) email!: () => string;
  @Input({ required: true }) password!: () => string;
  @Input({ required: true }) passwordConfirm!: () => string;

  @Input({ required: true }) isUsernameValid!: () => boolean | null;
  @Input({ required: true }) isEmailValid!: () => boolean | null;
  @Input({ required: true }) isPasswordValid!: () => boolean | null;
  @Input({ required: true }) isPasswordConfirmValid!: () => boolean | null;

  @Input({ required: true }) usernameError!: () => string | null;
  @Input({ required: true }) emailError!: () => string | null;
  @Input({ required: true }) passwordError!: () => string | null;
  @Input({ required: true }) passwordConfirmError!: () => string | null;

  @Input({ required: true }) isFormValid!: () => boolean;
  @Input({ required: true }) isLoading!: () => boolean;
  @Input({ required: true }) messageText!: () => string;
  @Input({ required: true }) getMessageClass!: () => string;
  @Input({ required: true }) checkPasswordRequirement!: (type: 'uppercase' | 'lowercase' | 'number' | 'length') => boolean;
  
  // --- SAÍDAS (Outputs) ---
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() handleRegistration = new EventEmitter<void>();
  @Output() updateField = new EventEmitter<{ field: string, value: string }>();

  onValueChange(field: string, value: string) {
    this.updateField.emit({ field, value });
  }
}