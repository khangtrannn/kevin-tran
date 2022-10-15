import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-size-choice',
  templateUrl: './size-choice.component.html',
  styleUrls: ['./size-choice.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SizeChoiceComponent),
      multi: true,
    },
  ],
})
export class SizeChoiceComponent implements ControlValueAccessor {
  options: string[] = ['S', 'M', 'L', 'XL'];

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

  onSizeChanged(value: string) {
    this.onChange?.(value);
  }
}
