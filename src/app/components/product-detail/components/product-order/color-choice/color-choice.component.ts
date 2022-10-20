import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

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
export class ColorChoiceComponent {
  private onDestroy$ = new Subject<void>();
  options: string[] = ['Đen', 'Trắng', 'Nâu Đất', 'Xanh Riêu'];

  sizeForm = new FormGroup({
    size: new FormControl('')
  });

  onTouched: (() => void) | undefined;
  onChange: ((value: unknown) => void) | undefined;

  ngOnInit(): void {
    this.sizeForm.controls.size.valueChanges.subscribe((value) => {
      this.onChange?.(value);
    });
  }

  registerOnChange(onChange: (_value: unknown) => void): void {
    this.onChange = onChange;
  }

  writeValue(value: string): void {
    this.sizeForm.controls.size.setValue(value);
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
