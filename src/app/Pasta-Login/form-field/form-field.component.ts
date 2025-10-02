import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  // Entradas (Inputs)
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  
  @Input() value: string = ''; 
  @Input() isValid: boolean | null = null;
  @Input() errorMessage: string | null = null;

  // Saídas (Outputs)
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  getValidationClass(): string {
      if (this.isValid === true) {
          return 'border border-green-500';
      }
      if (this.isValid === false) {
          return 'border border-red-500';
      }
      return 'border border-gray-700';
  }
}