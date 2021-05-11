// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);

console.log(json);

let back = JSON.parse(json);

console.log(back);


// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, replacer = (key, value) => {
  return (key !== "" && value === meetup) ? undefined : value;
}, 2));

