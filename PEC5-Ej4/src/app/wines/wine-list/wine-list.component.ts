import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";

@Component({
  selector: "app-wine-list",
  template: `
    <app-wine-item
      [wine]="wine"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let wine of wines"
    ></app-wine-item>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineListComponent implements OnInit {
  public wines: Wine[] = [];
  constructor() {}

  ngOnInit() {
    this.wines = [
      {
        id: 1,
        name: "Domaine de la Butte La Pied de la Butte",
        imageUrl: "assets/images/wine1.jpg",
        price: 19.95,
        
      
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 2,
        name: "Lolo",
        imageUrl: "assets/images/wine2.jpg",
        price: 6.15,
       
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 3,
        name: "Pago de Carraovejas",
        imageUrl: "assets/images/wine3.jpg",
        price: 31.9,
       
        isOnSale: false,
        quantityInCart: 0
      }
    ];
  }
  onQuantityChange(change: WineQuantityChange) {
    const wine = this.wines.find(({ id }) => change.wine.id === id);
   // wine.quantityInCart += change.changeInQuantity;
  }
}
