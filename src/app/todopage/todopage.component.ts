import { Component } from '@angular/core';
import { TodoformComponent } from '../todoform/todoform.component';

@Component({
  selector: 'app-todopage',
  standalone: true,
  imports: [ TodoformComponent ],
  templateUrl: './todopage.component.html',
  styleUrl: './todopage.component.scss'
})
export class TodopageComponent {

}
