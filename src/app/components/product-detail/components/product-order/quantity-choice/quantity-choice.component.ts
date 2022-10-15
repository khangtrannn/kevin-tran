import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-quantity-choice',
  templateUrl: './quantity-choice.component.html',
  styleUrls: ['./quantity-choice.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityChoiceComponent),
      multi: true,
    },
  ]
})
export class QuantityChoiceComponent implements ControlValueAccessor {
  value: number = 1;

  onTouched: (() => void) | undefined;
  onChange: ((value: unknown) => void) | undefined;

  increase(): void {
    this.value += 1;
    this.onQuantityChanged(this.value);
  }

  decrease(): void {
    if (this.value > 1) {
      this.value -= 1;
      this.onQuantityChanged(this.value);
    }
  }

  registerOnChange(onChange: (_value: unknown) => void): void {
    this.onChange = onChange;
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  onQuantityChanged(value: number) {
    this.onChange?.(value);
  }
}
