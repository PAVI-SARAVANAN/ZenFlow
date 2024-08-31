import { Component,EventEmitter,Input, Output } from '@angular/core';

type Days = {
  day:string;
  id: string;
}

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})
export class DaysComponent {
  @Input({required:true}) Day!:Days;

  @Output() Select = new EventEmitter();

  OnSelectedDay(){
    console.log("In days.ts file");
     this.Select.emit(this.Day.id);
  }

  

 



}
