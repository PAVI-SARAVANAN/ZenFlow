import { Component,Input } from '@angular/core';
import { asanasList } from '../asanas';
import { DailyAsanasComponent } from './daily-asanas/daily-asanas.component';
import { NewAsanasComponent } from "./new-asanas/new-asanas.component";

import { type newAsana } from './daily-asanas/asana.model';

@Component({
  selector: 'app-asanas',
  standalone: true,
  imports: [DailyAsanasComponent, NewAsanasComponent],
  templateUrl: './asanas.component.html',
  styleUrl: './asanas.component.css'
})
export class AsanasComponent {
  @Input() SelectedDay !:string;
  @Input() Goal!: string;
  @Input() SelectedID !: string;

  AddingAsana = false;

  asanas = asanasList;

  get dailyAsanas(){
    return this.asanas.filter((asana) => asana.id === this.SelectedID);
  }

  OnCompleteAsana(id:string){
    this.asanas = this.asanas.filter((asana) => asana.asanaId !== id);
  }
  OnClickAdd(){
    this.AddingAsana = true;
  }

  OnCancelAsana(){
    this.AddingAsana = false;
  }
  OnSubmitAsana(asana:newAsana){
    this.asanas.unshift({
      asana:asana.asana,
      pose:asana.pose,
      id:this.SelectedID,
      asanaId:"a8",
      duration:asana.duration
    });
    this.AddingAsana = false;

  }

}
