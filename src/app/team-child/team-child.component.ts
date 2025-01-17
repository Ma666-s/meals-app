import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-team-child',
  imports: [],
  templateUrl: './team-child.component.html',
  styleUrl: './team-child.component.css'
})
export class TeamChildComponent {

  @Output() myEvent : EventEmitter<string> = new EventEmitter()

 
  test()
  {
    this.myEvent.emit("")
    
  }
}