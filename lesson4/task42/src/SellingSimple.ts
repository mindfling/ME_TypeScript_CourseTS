import { AbstractSelling } from "./AbstractSelling";


// 1. Реализуйте первый производный класс от AbstractSelling, в котором продажа товара осуществляется с точной скидкой от цены товара размер скидки 10$. Переопределите нужные методы.

export class SellingSimple extends AbstractSelling {

  public getPrice: () => string = () => {
    this.money = this.amount * this.product.price;
    // this.product
    // this.amount
  
    if (this.money > 10) {
      return (this.money - 10).toFixed(2);
    } else {
      // money <= 10
      return (this.money).toFixed(2);
    }
    // возвращает строку от числа с 2 знаками после запятой
  }

}
