// obj car
const car: { // тип
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: [string, string][]; // массив кортежей
} = { // значение
  brand: 'BMW',
  model: 'xDrive30e',
  country: 'Germany',
  price: 5_000_000,
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
const totalVerdict = (car: { // тип аргумента обкт 
  brand: string;
  model: string;
  country: string;
  price: number;
  color: string;
  rating: [string, string][];
}) => {
  const sumRating = car.rating.reduce((
      acc: number,
      item: string[],
    ) => {
    console.log(acc, item);
    return acc + parseFloat(item[1]);
  }, 0);
  const verdict = sumRating / car.rating.length;
  return verdict;
};

// экспорт этого значения из модуля
export const carResult = totalVerdict(car);
