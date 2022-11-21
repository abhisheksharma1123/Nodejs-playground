const add = (a, b, callBack) => callBack(a + b);

add(2, 3, (result) => console.log(result));
