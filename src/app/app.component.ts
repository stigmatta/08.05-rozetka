import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { ComputerComponent } from './computer/computer.component';
import { MonitorComponent } from './monitor/monitor.component';
import { GamersComponent } from './gamers/gamers.component';
import { PlanshetComponent } from './planshet/planshet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LaptopComponent,ComputerComponent,MonitorComponent,GamersComponent,PlanshetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rozetka';
}
