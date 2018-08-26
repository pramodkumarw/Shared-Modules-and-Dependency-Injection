import { Component, OnInit } from '@angular/core';
import { CounterService } from "../test";

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styles: []
})
export class LazyComponent {

  constructor(private counterService:CounterService) { 
  }

  increaseCounter() {
    this.counterService.counter += 1;
  }

}
