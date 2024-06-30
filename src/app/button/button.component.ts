import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'default';
  @Input() customStyle: Record<string, string> = {};
  @Output() testClick: EventEmitter<void> = new EventEmitter();

  handleClick(e: any) {

    console.log(e)
    this.testClick.emit();
  }
}
