import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-color-choice',
  templateUrl: './color-choice.component.html',
  styleUrls: ['./color-choice.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorChoiceComponent),
      multi: true,
    },
  ],
})
export class ColorChoiceComponent implements ControlValueAccessor {
  value: string | undefined;
  onTouched: (() => void) | undefined;
  onChange: ((fieldValue: unknown) => void) | undefined;

  registerOnChange(onChange: (_fieldValue: unknown) => void): void {
    this.onChange = onChange;
  }

  writeValue(fieldValue: string): void {
    this.value = fieldValue;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  onColorChanged(value: string) {
    this.onChange?.(value);
  }
}
