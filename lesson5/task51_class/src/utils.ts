// * utilites module

export const getRandomID = () => 
  `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;

