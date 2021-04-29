// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };
// let user = makeUser();
// alert( user.ref.name ); // Каким будет результат?

// Oтвет

// в 2 последних случаях идет потеря метода this из-за переприсваивания функций 
//  ------------------------------------------------------------------------------------------------------------------------

// Создайте объект calculator (калькулятор) с тремя методами:
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.


let calculator = {
  read() {
    this.first = +prompt('First value', 0);
    this.second = +prompt('Second value', 0);
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  },
  sub() {
    return this.first - this.second;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.sub() );

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep(); // 1
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();