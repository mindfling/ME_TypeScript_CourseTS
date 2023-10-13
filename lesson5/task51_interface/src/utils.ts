// * utilites module

export const getRandomID = () =>
  `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;
// `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;



export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
