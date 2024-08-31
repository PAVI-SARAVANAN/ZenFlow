import { Component,EventEmitter,Input,Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Asana } from './asana.model';


@Component({
  selector: 'app-daily-asanas',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './daily-asanas.component.html',
  styleUrl: './daily-asanas.component.css'
})
export class DailyAsanasComponent {
  @Input() SelectedDayAsanas !: Asana;
  @Output() Complete = new EventEmitter<string>();

  OnComplete(){
    return this.Complete.emit(this.SelectedDayAsanas.asanaId);
  }

}
