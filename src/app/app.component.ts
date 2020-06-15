import { Component } from '@angular/core';
import {GeneralServiceService} from "./service/general-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-front';
  public name: string
  public priceCost: string
  public priceSale: string
  public quantity: string
  public isDisabled: boolean
  constructor(private generalServiceService: GeneralServiceService) {
  }
  save(){
    let product = {
      name: this.name,
      priceCost: this.priceCost,
      priceSale: this.priceSale,
      quantity: this.quantity
    }
    this.generalServiceService.saveProduct(product).subscribe(response => {
      this.isDisabled = true;
    })
  }
}
