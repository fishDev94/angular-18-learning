import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss',
})
export class TodoformComponent {
  inputValue: any = ""

  handleSubmit() {
    console.log('cliccato');
    console.log(this.inputValue);
    this.inputValue = "";
  }
}
