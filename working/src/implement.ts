
// интерфейс
interface Goods {
  title: string;
  number: number;
  price: number;
  
  logger(str: string): void;
}

// класс имплементирует интерфейс
class TV implements Goods {
  // public methodes
  number: number;
  price: number;
  
  // конструктор
  constructor(readonly title: string, price: number, number: number) {
    this.title = title;
    this.number = number;
    this.price = price;
  }
  
  // просто public метод
  logger(str: string): void {
    console.log(str, 'logger tv television', this);
  }
}


class WM implements Goods {
  number: number;
  price: number;
  // новое поле
  weight: number;
  
  constructor (readonly title: string, number: number, price: number, weight: number) {
    this.title = title;    
    this.number = number;
    this.price = price;
    this.weight = weight;
  }
  
    // просто public метод
    logger(str: string): void {
      console.log('logger WM', this);
    }
}



// создаем отдельные обекты
const tvOne = new TV('telek', 12350, 2);
console.log('tvOne: ', tvOne);
tvOne.logger('этот телевизок один');
