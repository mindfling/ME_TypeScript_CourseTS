//* OK
// Класс Продукт

export class Product {
  private _title: string; // название товара
  private _price: number; // цена товара в ру
  
  
  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }
  
  
  set title(productTitle: string) {
    this.title = productTitle;
  }
  
  get title(): string {
    return this._title;
  }
  
  
  set price(productPrice: number) {
    this._price = productPrice;
  }
  
  get price(): number {
    return this._price;
  }
}
