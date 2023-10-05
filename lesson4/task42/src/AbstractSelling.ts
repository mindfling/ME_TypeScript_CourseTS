// * Selling абстрактный Класс для Продажи
import { Product } from "./Product";


// абстрактный класс
export abstract class AbstractSelling {
  private _product: Product;
  private _amount: number;

  constructor(sellingProduct: Product, sellingAmount: number) {
    this._product = sellingProduct;
    this._amount = sellingAmount;
  }


  set product(product: Product) {
    this._product = product;
  }

  get product(): Product {
    return this._product;
  }

  set amount(amount: number) {
    this._amount = amount;
  }

  get amount(): number {
    return this._amount;
  }


  // функция сравнения для сортировки по убыванию ...3,2,1
  public static compare = (a: AbstractSelling, b: AbstractSelling): number => {
    return (parseFloat(b.getPrice()) - parseFloat(a.getPrice()));
  } 

  /*
  // * comparing func для сортировки
  public compare(otherProduct: Product): number {
    if (this._product.price < otherProduct.price) {
      return 1;
    }
    if (this._product.price > otherProduct.price) {
      return -1;
    }
    return 0;
  }
  */

  // * абстрактный метод должен быть имплеменитирован в дочерних классах
  public abstract getPrice: () => string;
}
