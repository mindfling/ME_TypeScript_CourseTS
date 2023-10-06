function getKey<T extends object, U extends keyof T> (obj: T, value: T[U]): U | null {
  const key = (Object.keys(obj) as Array<U>).find((k) => obj[k] === value);
  
  return key || null;
}


function getKeyOne<T extends object>(obj: T, value: T[keyof T]): keyof T | null{
  const key = (Object.keys(obj) as Array<keyof T>).find(k => obj[k] === value);
  
  return key || null;
}

console.log( getKey({
  name: 'dim',
  id: 123,
  staff: ['aoeu', '34', 34],
}, 'dim'))

