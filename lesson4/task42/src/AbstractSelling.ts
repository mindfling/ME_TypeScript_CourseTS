// * Selling абстрактный Класс для Продажи
import { Product } from "./Product";


// * абстрактный класс
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


  // * абстрактный метод должен быть имплеменитирован в дочерних классах
  // ? вопрос ? что должен возвращать string или number ?
  public abstract getPrice: () => number;


  // * функция сравнения для сортировки по убыванию ...3,2,1
  public static compare = (first: AbstractSelling, second: AbstractSelling): number => {
    return (second.getPrice() - first.getPrice());
  }


  // ? какие аргументы должны быть у .compare и что должна возвращать ?
  /*
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
}
