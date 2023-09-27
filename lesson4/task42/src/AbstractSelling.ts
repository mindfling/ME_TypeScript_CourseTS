// импорты
import { Product } from "./Product";

// * Интерфейс Продаж со всеми пабликами
export interface iSelling {
  money?: number;
  product: Product;
  amount: number;
  getPrice: () => string;
  compare: (otherProduct: Product) => boolean;
}


// * Selling Класс Продажи
export abstract class AbstractSelling implements iSelling {
  private _product: Product;
  private _amount: number;
  public money!: number;
  
  
  constructor(sellingProduct: Product, sellingAmount: number) {
    this._product = sellingProduct;
    this._amount = +sellingAmount;
  }

  public abstract getPrice: () => string;
  
  public compare(otherProduct: Product): boolean {
    if (this._product.price > otherProduct.price) {
      console.log(this._product.title, 'дороже чем', otherProduct.title);
      return true;
    }
    return false;
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

  // public getPrice(): string {
  //   console.log('Product:\nназвание: ', this._product.title, '\nпо цене: ', this._product.price);
  //   // todo абстрактный
  //   return (this._amount * this._product.price).toFixed(2);
  // }
}


