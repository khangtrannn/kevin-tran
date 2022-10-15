import { Component } from '@angular/core';

@Component({
  selector: 'app-size-choice',
  templateUrl: './size-choice.component.html',
  styleUrls: ['./size-choice.component.scss']
})
export class SizeChoiceComponent {
  options: string[] = ['S', 'M', 'L', 'XL'];
}
