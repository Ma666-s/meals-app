import { Component } from '@angular/core';
import { TeamChildComponent } from "../team-child/team-child.component";
import { Seafood } from '../models/seafood.interface';

@Component({
  selector: 'app-team',
  imports: [TeamChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  userName : boolean = true
  tes()
  {
    let x = document.getElementById('demo');
    x?.classList.add('d-none')
    
  }
}
