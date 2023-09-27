import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


export class SellingForAmount extends AbstractSelling {
  private discountQuantaty: number;


  constructor(sellingProduct: Product, sellingAmount: number, discountQuantaty: number) {
    super(sellingProduct, sellingAmount);
    this.product = sellingProduct; // ?
    this.amount = sellingAmount;  // ?
    this.discountQuantaty = discountQuantaty;
  }

  // public compare(otherProduct: Product): boolean {
  //   return (this.product.price > otherProduct.price);
  // }
  
  public getPrice: () => string = () => {
    if (this.amount < this.discountQuantaty) {
      return (this.amount * this.product.price).toFixed(2);
    } else {

      return (this.amount * this.product.price * 0.9).toFixed(2); // -10% discount
    }
  }



  // public getPrice(): string {
  //   console.log('Product:\nназвание: ', this._product.title, '\nпо цене: ', this._product.price);
  //   // todo абстрактный
  //   return (this._amount * this._product.price).toFixed(2);
  // }
  
}


const prod = new Product('Мой продукт', 124);
console.log('prod: цена', prod.price, " название", prod.title);

const sell = new SellingForAmount(prod, 10, 5);
console.log('sell: ', sell);
