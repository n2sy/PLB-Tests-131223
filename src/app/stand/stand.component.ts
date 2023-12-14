import { Component } from '@angular/core';
import { Stand2Component } from '../stand2/stand2.component';

@Component({
  selector: 'app-stand',
  standalone: true,
  imports: [Stand2Component],
  templateUrl: './stand.component.html',
  styleUrl: './stand.component.css',
})
export class StandComponent {

}
