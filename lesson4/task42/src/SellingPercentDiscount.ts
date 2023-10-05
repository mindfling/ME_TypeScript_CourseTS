// * класс с процентной скидкой -10%
import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


export class SellingPercentDiscount extends AbstractSelling {
  private minimalAmount: number;


  constructor(product: Product, amount: number, minimalAmount: number) {
    super(product, amount);
    this.product = product
    this.amount = amount;
    this.minimalAmount = minimalAmount;
  }

  public getPrice: () => string = () => {
    if (this.amount >= this.minimalAmount) { // условие получения скидки
      return (this.amount * this.product.price * 0.9).toFixed(2); // -10% discount
    } else {
      return (this.amount * this.product.price).toFixed(2);
    }
  }
}


/*
* test
const prod = new Product('Мой продукт', 124);
console.log('prod: цена', prod.price, " название", prod.title);

const sell = new SellingPercentDiscount(prod, 10, 5);
console.log('sell: ', sell);
*/
