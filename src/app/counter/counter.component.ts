import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>{{ counter }}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCounter()">reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterComponent {

    constructor() {

    }
    
    public counter: number = 10;

    // Es un metodo de la clase no una funcion.
    // por defecto es pulic
    increaseBy(number: number): void {
        this.counter += number;
    }

    resetCounter(): void {
        this.counter = 10;
    }

}