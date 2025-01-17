import { Component, Input, input } from '@angular/core';
import { Seafood } from '../models/seafood.interface';

@Component({
  selector: 'app-seafood-card',
  imports: [],
  templateUrl: './seafood-card.component.html',
  styleUrl: './seafood-card.component.css'
})
export class SeafoodCardComponent {

  @Input({required:true}) seafoodCard : Seafood = {} as Seafood
}
