"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const SellingSimple_1 = require("./SellingSimple");
const SellingTenDiscount_1 = require("./SellingTenDiscount");
const SellingPercentDiscount_1 = require("./SellingPercentDiscount");
console.log();
const apple = new Product_1.Product('Яблоки сезонные', 69.99);
const banana = new Product_1.Product('Бананы загранишные', 99.99);
const tomato = new Product_1.Product('Томаты помидоры', 59.00);
const onion = new Product_1.Product('Лук репчаты', 32.00);
console.log({ apple });
console.log({ banana });
console.log({ tomato });
console.log({ onion });
const sellingApple = new SellingTenDiscount_1.SellingTenDiscount(apple, 10);
const sellingBanana = new SellingSimple_1.SellingSimple(banana, 25);
const sellingOnion = new SellingPercentDiscount_1.SellingPercentDiscount(onion, 15, 10);
const listOfSellings = [
    new SellingTenDiscount_1.SellingTenDiscount(apple, 10),
    new SellingTenDiscount_1.SellingTenDiscount(banana, 5),
    new SellingTenDiscount_1.SellingTenDiscount(tomato, 15),
    new SellingTenDiscount_1.SellingTenDiscount(onion, 7),
    new SellingPercentDiscount_1.SellingPercentDiscount(apple, 2, 10),
    new SellingPercentDiscount_1.SellingPercentDiscount(banana, 5, 10),
    new SellingPercentDiscount_1.SellingPercentDiscount(tomato, 15, 10),
    new SellingPercentDiscount_1.SellingPercentDiscount(onion, 7, 10),
];
console.log('unsorted ListOfSellings: ', listOfSellings);
console.log();
