// интерфейсы
// all that is public in interface

// * Интерфейс Продукта со всеми public
interface iProduct {
  title: string;
  price: number;
  logInfo: () => void; // ?
}


// * Класс Продукт
export class Product implements iProduct {
  private _title: string;
  private _price: number;
  
  
  constructor(productTitle: string, productPrice: number) {
    this._title = productTitle;
    this._price = productPrice;
  }
  
  // ?
  logInfo: () => void = () => {
    console.log(`Товар ${this._title} по цене ${this._price} ру/кг`);
  }
  
  
  set title(productTitle: string) {
    this.title = productTitle + '';
  }
  
  get title(): string {
    return this._title;
  }
  
  set price(productPrice: number) {
    this._price = +productPrice;
  }
  
  get price(): number {
    return this._price;
  }
}