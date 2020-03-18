//Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл for.

let str = "Js is a good language";
let buf = str.split(" ");
let str2="";
for (let i=0; i < buf.length; i++){
    let firstLetters = buf[i][0].toUpperCase();
    let lastLetters = buf[i].slice(1,buf[i].length)
    str2 += firstLetters + lastLetters;
}
console.log(str2);

//Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива

function doubleArr(arr) {
   for (let keys in arr) {
       arr.push(arr[keys]);
   }
   console.log(arr);
    
}
doubleArr(['one','two','three','four']);

