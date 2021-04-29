// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  let tmpArr = [];
    for(let str of arr) {
      if(a <= str && b >= str) {
        tmpArr.push(str);
      }
    }
  arr = tmpArr;
  console.log(arr);
}
filterRangeInPlace(arr, 1, 4);


// Сортировать в порядке по убыванию
let arrSort = [5, 2, 1, -10, 8];
arrSort.sort();
console.log(arrSort.reverse());


// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = [];
const copySorted = () => {
  sorted = arr.slice(0);
  sorted.sort();
}
copySorted(arr);

console.log("Default Array",arr);
console.log("Sorted Array",sorted);

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names );

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullname: user.name + " " + user.surname,
  id: user.id,
}));

console.log(usersMapped);

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

const sortByAge = (arr) => {
  arr.sort((a,b) => {
    if(a.age > b.age) {
      return 1;
    } else {
      return -1;
    }
  })
}

let arr = [ vasya, petya, masha ];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);


// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

const shuffle = () => {
let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
	}
return arr;
}

console.log(shuffle());


// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (users) => {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr));


// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique() {
  let result = [];

  for (let str of strings) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );