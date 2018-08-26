import { NgModule } from "@angular/core";
import { LazyComponent } from "./lazy/lazy.component";
import { Routes, RouterModule } from "@angular/router";
import { CounterService } from "./test";
import { SharedModule } from "./shared.module";

let routes: Routes = [
    { path: "", component: LazyComponent }
];


@NgModule({
    declarations: [LazyComponent],
    imports: [
        RouterModule.forChild(routes),SharedModule
    ],
    providers: [ ]
})
export class LazyModule {
}