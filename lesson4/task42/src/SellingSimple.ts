// * простой класс для простой продажи
import { AbstractSelling } from "./AbstractSelling";


export class SellingSimple extends AbstractSelling {
  private money: number = 0; // поумолчанию 0

  public override getPrice: () => number = () => {
    this.money = this.amount * this.product.price;
    // возвращает строку от числа с 2 знаками после запятой
    return parseFloat(this.money.toFixed(2));
  }
}
