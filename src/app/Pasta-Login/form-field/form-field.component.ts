import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  // --- ENTRADAS (Inputs) ---
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  
  @Input() value: string = ''; 
  @Input() isValid: boolean | null = null;
  @Input() errorMessage: string | null = null;

  // --- SAÍDAS (Output) ---
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string) {
    this.valueChange.emit(newValue);
  }

  getValidationClass(): string {
      if (this.isValid === true) {
          return 'border-green-500';
      }
      if (this.isValid === false) {
          return 'border-red-500';
      }
      return 'border-gray-700';
  }
}