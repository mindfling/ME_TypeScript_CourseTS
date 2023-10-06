// * класс с постоянной скидкой -10$
import { AbstractSelling } from "./AbstractSelling";


export class SellingTenDiscount extends AbstractSelling {
  private money: number = 0;

  // переопределяем
  public override getPrice = (): number => {
    this.money = this.amount * this.product.price;

    if (this.money > 10) {
      // скидка целесообразна выше 10, т.к. ниже 10 скиндки нет
      this.money = this.money - 10;
    }
    return parseFloat(this.money.toFixed(2));
  }
}
