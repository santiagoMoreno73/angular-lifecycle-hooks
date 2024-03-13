import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log("constructor")

  }

  ngOnInit(): void {
    console.log("ngOnInit")

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  increasePrice() {
    this.currentPrice++;
  }
}
