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

  // public money!: number;

  // set amount(amount: number) {
    
  // }
  // get amount(): number {
    
  // }

  public compare(otherProduct: Product): boolean {
    return (this.product.price > otherProduct.price);
  }
  
  // set product(product: Product) {
    
  // }
  // get product(): Product {
    
  // }
  
  public getPrice: () => string = () => {
    if (this.amount < this.discountQuantaty) {
      return (this.amount * this.product.price).toFixed(2);
    } else {

      return (this.amount * this.product.price * 0.9).toFixed(2); // -10% discount
    }
  }
}