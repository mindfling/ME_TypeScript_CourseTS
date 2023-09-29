// * Ok
// импорты
import { Product } from "./Product";


// Selling абстрактный Класс для Продажи
export abstract class AbstractSelling {
  private _product: Product;
  private _amount: number;
  
  
  // просто ко
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
   
  
  // абстрактный метод должен быть имплеменитирован в дочерних классах
  public abstract getPrice: () => string;
   

  // comparing func для сортировки
  public compare(otherProduct: Product): number {
    if (this._product.price < otherProduct.price) {
      return 1;
    }
    if (this._product.price > otherProduct.price) {
      return -1;
    }
    return 0;
  }  
}
