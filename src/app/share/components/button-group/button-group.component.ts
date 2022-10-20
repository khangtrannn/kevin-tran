import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonGroupComponent),
      multi: true,
    },
  ],
})
export class ButtonGroupComponent {
  @Input() title: string | undefined;
  @Input() options!: string[];

  _value!: string;

  get value(): string {
    return this._value;
  }

  set value(_value: string) {
    this._value = _value;
    this.onChange?.(this._value);
  }

  onTouched: (() => void) | undefined;
  onChange: ((value: unknown) => void) | undefined;

  registerOnChange(onChange: (_value: unknown) => void): void {
    this.onChange = onChange;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }
}
