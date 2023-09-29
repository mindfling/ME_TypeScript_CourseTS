import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


export class SellingForAmount extends AbstractSelling {
  private minimalAmount: number;


  constructor(sellingProduct: Product, sellingAmount: number, minimalAmount: number) {
    super(sellingProduct, sellingAmount);
    this.product = sellingProduct; // ?
    this.amount = sellingAmount;  // ?
    this.minimalAmount = minimalAmount;
  }

  public getPrice: () => string = () => {
    if (this.amount < this.minimalAmount) { // условие получения скидки
      return (this.amount * this.product.price).toFixed(2);
    } else {
      return (this.amount * this.product.price * 0.9).toFixed(2); // -10% discount
    }
  }
  
}


const prod = new Product('Мой продукт', 124);
console.log('prod: цена', prod.price, " название", prod.title);

const sell = new SellingForAmount(prod, 10, 5);
console.log('sell: ', sell);
