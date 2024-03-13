import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public price: number = 0;
  // $ only observables
  public interval$?: Subscription;

  constructor() { }

  ngOnInit(): void {
    console.log("children component: ngOnInit")
    this.interval$ = interval(1000).subscribe(value => console.log("Tick", value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("children component: ngOnChanges")
  }

  ngOnDestroy(): void {
    console.log("children component: ngOnDestroy")
    this.interval$?.unsubscribe();
  }
}
