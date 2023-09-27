// todo

import { Product } from "./Product";
import { AbstractSelling, iSelling } from "./AbstractSelling";
import { SellingSimple } from "./SellingSimple";

console.log();

// создаем продукт
const apple: Product = new Product('Яблоки сезонные', 69.99);
const banana: Product = new Product('Бананы загранишные', 99.99);


console.log({ apple });

console.log("товар:");
console.log("название: ", apple.title);
console.log("цена: ", apple.price, " ру за кг");
// apple.logInfo();


console.log();

// console.log({banana});
// * продаём
const sellingBanana: iSelling = new SellingSimple(banana, 24);
console.log('sellingBanana: ', sellingBanana);
console.log('цена продукта', sellingBanana.product.title,
  '\nсумма продажи', sellingBanana.amount, 'кг = ', sellingBanana.getPrice(), 'ру');



