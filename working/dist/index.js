"use strict";
const product = {
    title: 'quadro',
    price: 25000,
    count: 10,
    isArrived: true,
    option: {
        color: 'white',
        distance: 1000,
        weight: 4,
    }
};
const calcTotalPrice = ({ title, price, count, option: { weight, } }) => {
    const total = price * count;
    console.log(`${title} by cost: ${total}`);
    return total;
};
const city = ['Калининград', 'Таллин', 'Варшава'];
const counter = [23, 14, 256, 8];
const arrrrr = [13, "тринадцать", true];
const arrObj = [
    { name: 'Maks', age: 35 },
    { name: 'Serg', age: 27 },
];
const totalPrice = calcTotalPrice(product);
console.log('totalPrice: ', totalPrice);
