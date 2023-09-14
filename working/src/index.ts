// variables
// const title: string = 'Kvadro'
// const price: number = 5_000
// const count: number = 5
// const isArrived: boolean = false;

// object
const product: { // типы
  title: string;
  price: number;
  count: number;
  isArrived: boolean;
  option: {
    color: string;
    distance: number;
    weight: number;
  },
} = { // значение
  title: 'quadro',
  price: 25000,
  count: 10,
  isArrived: true,
  option: {
    color: 'white',
    distance: 1000,
    weight: 4,
  }
}

/*
// * func with typed params
const calcTotalPrice = (
  title: string,
  price: number,
  count: number
): number => {
  const total: number = price * count;
  console.log(`${title} by cost: ${total}`);
  return total;
}
*/

/*
// * func with obj param typed
const calcTotalPrice = ( item: {
    title: string,
    price: number,
    count: number
  }
): number => {
  const total: number = item.price * item.count;
  console.log(`${item.title} by cost: ${total}`);
  return total;
}
*/

// * func with destructed obj params
const calcTotalPrice = ({
  title,
  price,
  count,
  option: {
    weight,
  }
}: {
  title: string,
  price: number,
  count: number,
  option: {
    weight: number,
  }
}
): number => {
  const total: number = price * count;
  console.log(`${title} by cost: ${total}`);
  return total;
}



const city: readonly string[] = ['Калининград', 'Таллин', 'Варшава']
const counter: number[] = [23, 14, 256, 8]
const arrrrr: [number, string, boolean] = [13, "тринадцать", true] // кортеж tuple
const arrObj: { // * types
  name: string;
  age: number
}[] = [ // * values
  { name: 'Maks', age: 35 },
  { name: 'Serg', age: 27 },
];



const totalPrice: number = calcTotalPrice(product);
console.log('totalPrice: ', totalPrice);
