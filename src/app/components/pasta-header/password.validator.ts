import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    
    const hasMinLength = value.length >= 6;
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    
    const passwordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumeric;

    if (passwordValid) {
      return null;
    }
    return {
      passwordStrength: {
        hasMinLength: hasMinLength,
        hasUpperCase: hasUpperCase,
        hasLowerCase: hasLowerCase,
        hasNumeric: hasNumeric
      }
    };
  }
}