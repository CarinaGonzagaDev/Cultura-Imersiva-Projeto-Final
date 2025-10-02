import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormFieldComponent } from '../form-field/form-field.component'; 

@Component({
  selector: 'app-registration-dialog',
  standalone: true,
  imports: [FormFieldComponent], 
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationDialogComponent {
  // Entradas (Inputs)
  
  @Input() username!: () => string;
  @Input() email!: () => string;
  @Input() password!: () => string;
  @Input() passwordConfirm!: () => string;

  @Input() isUsernameValid!: () => boolean | null;
  @Input() isEmailValid!: () => boolean | null;
  @Input() isPasswordValid!: () => boolean | null;
  @Input() isPasswordConfirmValid!: () => boolean | null;

  @Input() usernameError!: () => string | null;
  @Input() emailError!: () => string | null;
  @Input() passwordError!: () => string | null;
  @Input() passwordConfirmError!: () => string | null;

  @Input() isFormValid!: () => boolean;
  @Input() isLoading!: () => boolean;
  @Input() messageText!: () => string;
  
  @Input() getMessageClass!: () => string;
  @Input() checkPasswordRequirement!: (type: 'uppercase' | 'lowercase' | 'number' | 'length') => boolean;
  
  // Saídas (Outputs)
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() handleRegistration = new EventEmitter<void>();
  @Output() updateField = new EventEmitter<{ field: string, value: string }>();

  onValueChange(field: string, value: string) {
    this.updateField.emit({ field, value });
  }
}