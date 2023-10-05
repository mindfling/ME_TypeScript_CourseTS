// * класс с процентной скидкой -10%
import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


// наследование абстрактного класса
export class SellingPercentDiscount extends AbstractSelling {
  private minimalAmount: number;

  constructor(product: Product, amount: number, minimalAmount: number) {
    super(product, amount);
    this.product = product
    this.amount = amount;
    this.minimalAmount = minimalAmount;
  }

  // имплементация абстрактного метода
  public override getPrice: () => string = () => {
    if (this.amount >= this.minimalAmount) { // условие получения скидки
      return (this.amount * this.product.price * 0.9).toFixed(2); // -10% discount
    } else {
      return (this.amount * this.product.price).toFixed(2);
    }
  }
}
