import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

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
export class SizeChoiceComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private onDestroy$ = new Subject<void>();
  options: string[] = ['S', 'M', 'L', 'XL'];

  colorForm = new FormGroup({
    color: new FormControl('')
  });

  onTouched: (() => void) | undefined;
  onChange: ((value: unknown) => void) | undefined;

  ngOnInit(): void {
    this.colorForm.controls.color.valueChanges.subscribe((value) => {
      this.onChange?.(value);
    });
  }

  registerOnChange(onChange: (_value: unknown) => void): void {
    this.onChange = onChange;
  }

  writeValue(value: string): void {
    this.colorForm.controls.color.setValue(value);
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
