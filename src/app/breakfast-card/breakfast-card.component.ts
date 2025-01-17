import { Component, Input } from '@angular/core';
import { Breakfast } from '../models/breakfast.interface';

@Component({
  selector: 'app-breakfast-card',
  imports: [],
  templateUrl: './breakfast-card.component.html',
  styleUrl: './breakfast-card.component.css'
})
export class BreakfastCardComponent {
@Input() breakCard : Breakfast = {} as Breakfast
}
