import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../store/counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  value: number = 0;
  count$: Observable<number>

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.select('count')
  }

  handleButtonClick (type?: string) {
    if (type === 'decrement') {
      --this.value;
      this.store.dispatch(decrement())
      return;
    }
    ++this.value;    
    this.store.dispatch(increment())
  }
}
