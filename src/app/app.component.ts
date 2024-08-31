import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DaysComponent } from "./days/days.component";
import { AsanasComponent } from "./asanas/asanas.component";
import { DailyAsanasComponent} from './asanas/daily-asanas/daily-asanas.component';
import { zendays } from './daysarray';
import { asanaPlan } from './asanaplan';
import { NewAsanasComponent } from './asanas/new-asanas/new-asanas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DaysComponent, AsanasComponent,DailyAsanasComponent, NewAsanasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ZenFlow';
  days = zendays;
  asanaplan = asanaPlan;

  SelectedDay ?:string;

  onSelectDay(id:string){
     this.SelectedDay = id;
  }
  get DaySelected(){
    return this.days.find((day) => day.id === this.SelectedDay);
  }

  get AsanaGoal(){
    return this.asanaplan.find((plan) => plan.id === this.SelectedDay);
  }

  
}
