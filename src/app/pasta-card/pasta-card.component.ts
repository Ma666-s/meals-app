import { Component, Input } from '@angular/core';
import { Pasta } from '../models/pasta.interface';

@Component({
  selector: 'app-pasta-card',
  imports: [],
  templateUrl: './pasta-card.component.html',
  styleUrl: './pasta-card.component.css'
})
export class PastaCardComponent {

  @Input() pastaCard : Pasta = {} as Pasta
}
