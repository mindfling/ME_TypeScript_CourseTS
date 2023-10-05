// * класс с постоянной скидкой -10$
import { AbstractSelling } from "./AbstractSelling";
// import { Product } from "./Product";


export class SellingTenDiscount extends AbstractSelling {
  private money: number = 0;

  // переопределяем
  public override getPrice: () => string = () => {
    this.money = this.amount * this.product.price;
  
    if (this.money > 10) {
      // скидка целесообразна выше 10
      return (this.money - 10).toFixed(2);
    } else {
      // ниже 10 скиндки нет
      return (this.money).toFixed(2);
    }
    // возвращает строку от числа с 2 знаками после запятой
  }
}
