// * класс с процентной скидкой -10%
import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


// наследование абстрактного класса
export class SellingPercentDiscount extends AbstractSelling {
  private money: number = 0;
  private _minimalAmount: number;

  constructor(product: Product, amount: number, minimalAmount: number) {
    super(product, amount);
    this.product = product
    this.amount = amount;
    this._minimalAmount = minimalAmount;
  }

  // имплементация абстрактного метода
  public override getPrice = () => {
    if (this.amount >= this._minimalAmount) { // условие получения скидки
      this.money = this.amount * this.product.price * 0.9; // -10% discount
    } else {
      this.money = this.amount * this.product.price;
    }
    return parseFloat(this.money.toFixed(2));
  }
}
