// * пользоватльские типы
type Rate = [string, string]; // кортеж - упорядоченный массив

/*
type Car = {
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: Rate[]; // массив кортежей
};
*/


// * пользовательские интерфейсы
interface OuterView {
  color: 
  | 'white'
  | 'lightgrey' 
  | 'grey' 
  | 'darkgrey' 
  | 'yellowgreen' 
  | 'lawngreen'
  | 'green' 
  | 'black'
}
  
interface Product {
  brand: string;
  model: string;
}

interface Car extends Product, OuterView {
  country: string;
  price: number;
  rating: Rate[];
}


// obj car
const car: Car = { // значение
  brand: 'BMW',
  model: 'xDrive30e',
  country: 'Germany',
  price: 500_000,
  color: 'white',
  rating: [
    ['performance', '8.0'],
    ['comfort', '8.0'],
    ['interior', '8.5'],
    ['technology', '8.0'],
    ['storage', '8.0'],
    ['fuelEconomy', '6.5'],
    ['value', '7.5'],
    ['wildcard', '8.5'],
  ],
};

// function функция оценки 
const totalVerdict = (car: Car) => {
  const sumRating = car.rating.reduce((
    acc: number,
    item: Rate,
  ) => {
    console.log(acc, item);
    return acc + parseFloat(item[1]);
  }, 0);
  const verdict = sumRating / car.rating.length;
  return verdict;
};

// экспорт этого значения из модуля
export const carResult = totalVerdict(car);
