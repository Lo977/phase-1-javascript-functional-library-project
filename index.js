function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (const key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const newArr = Object.values(collection).map((element) => callback(element));
  return newArr;
}

function myReduce(collection, callBack, accumulator) {
  collection = Object.values(collection);
  if (accumulator === undefined) {
    accumulator = collection[0];
    collection = collection.slice(1);
  }
  for (const value of collection) {
    accumulator = callBack(accumulator, value);
  }
  return accumulator;
}
function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
  return undefined;
}
function myFilter(collection, predicate) {
  let newArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      newArr.push(collection[i]);
    }
  }
  return newArr;
}
function mySize(collection) {
  return Object.keys(collection).length;
}
function myFirst(array, n) {
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}
function myLast(array, n) {
  if (n) {
    return array.slice(array.length - n);
  } else {
    return array[array.length - 1];
  }
}
function myKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
function myValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
