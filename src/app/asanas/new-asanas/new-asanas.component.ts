import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { newAsana } from '../daily-asanas/asana.model'; 


@Component({
  selector: 'app-new-asanas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-asanas.component.html',
  styleUrl: './new-asanas.component.css'
})
export class NewAsanasComponent {
  @Output() Cancel = new EventEmitter();
  @Output() add = new EventEmitter<newAsana>();

  durations = ['1','2','3','4','5'];
  asanas = [ {name:'Utkatasana', pose:'Chair Pose'}, 
             {name: 'Garudasana', pose: 'Eagle Pose'},
             {name:'Balasana', pose:'Child Pose'},
             {name:'Bhujangasana', pose:'Cobra Pose'},
             {name:'Ustrasana', pose:'Camel Pose'},
             {name:'Dhanurasana', pose:'Bow Pose'}
            ]

  enteredAsana = ' ';
  enteredPose = ' ';
  enteredDuration = ' ';
 

  OnCancel(){
    this.Cancel.emit();
  }
  OnSubmit(){
    this.add.emit({
      asana: this.enteredAsana,
      pose: this.enteredPose, 
      duration: this.enteredDuration 
    });
  }
  OnSelectAsana(SelectedAsana:string){
    const SelectedPose = this.asanas.find((asana) => asana.name === SelectedAsana);
    this.enteredPose = SelectedPose? SelectedPose.pose:' ';
  }


}
