// todo

import { Product } from "./Product";
import { AbstractSelling } from "./AbstractSelling";
import { SellingSimple } from "./SellingSimple";
import { SellingTenDiscount } from "./SellingTenDiscount";
import { SellingPercentDiscount } from "./SellingPercentDiscount";

console.log();

// создаем продукт
const apple: Product = new Product('Яблоки сезонные', 69.99);
const banana: Product = new Product('Бананы загранишные', 99.99);
const tomato: Product = new Product('Томаты помидоры', 59.00);
const onion: Product = new Product('Лук репчаты', 32.00);


console.log({ apple });
console.log({ banana });
console.log({ tomato });
console.log({ onion });


// * продаём
const sellingApple: AbstractSelling = new SellingTenDiscount(apple, 10);
const sellingBanana: AbstractSelling = new SellingSimple(banana, 25);
const sellingOnion: AbstractSelling = new SellingPercentDiscount(onion, 15, 10);

const listOfSellings: AbstractSelling[] = [
  new SellingTenDiscount(apple, 10),
  new SellingTenDiscount(banana, 5),
  new SellingTenDiscount(tomato, 15),
  new SellingTenDiscount(onion, 7),
  new SellingPercentDiscount(apple, 2, 10),
  new SellingPercentDiscount(banana, 5, 10),
  new SellingPercentDiscount(tomato, 15, 10),
  new SellingPercentDiscount(onion, 20, 10),
]

console.log('unsorted ListOfSellings: ', listOfSellings);
console.log();

// todo Question КАК сделать стортировку массива ?
// console.log('sorted ListOfSellings:', Array.sort(AbstractSelling.compare));


listOfSellings.sort((a: AbstractSelling, b: AbstractSelling): number => {
  return (a.product.price - b.product.price); // ascending 1,2,3...
})
console.log('SORTED ascending ListOfSellings: ', listOfSellings);

/*
listOfSellings.sort((a: AbstractSelling, b: AbstractSelling): number => {
  return -(+a.getPrice() - +b.getPrice()); // desscending ...3,2,1
})
console.log('SORTED по стоимости getPrice ListOfSellings: ', listOfSellings);
*/

listOfSellings.sort(AbstractSelling.compare)
console.log('SORTED по стоимости AbstractSelling.compare ListOfSellings: ', listOfSellings);


