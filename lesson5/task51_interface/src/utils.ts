// * utilites module

/** возвращает рандомный @param id */
export const getRandomID = (): string =>
  `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;


/**
 * возвращает случайное целое число между @param min и @param max включительно
 */
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
