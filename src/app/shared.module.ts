import { NgModule } from '@angular/core';
import { CounterService } from './test';

@NgModule({
  providers: [CounterService]
})
export class SharedModule {}