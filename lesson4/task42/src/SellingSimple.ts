// * простой класс для простой продажи
import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


export class SellingSimple extends AbstractSelling {
  private money: number = 0; // поумолчанию 0

  public getPrice: () => string = () => {
    this.money = this.amount * this.product.price;
      // возвращает строку от числа с 2 знаками после запятой
      return (this.money).toFixed(2);
  }

}

/*
* *test
const product = new Product('Тестовый продукт', 1230);
const sell = new SellingSimple(product, 10);

product.price;
product.title;

sell.product.title;
sell.product.price;

sell.amount;
sell.getPrice();
*/