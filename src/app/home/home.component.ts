import { Component, OnInit } from '@angular/core';
import { CounterService } from "../test";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor(private counterService:CounterService) { 
  }

  increaseCounter() {
    this.counterService.counter += 1;
  }

}
