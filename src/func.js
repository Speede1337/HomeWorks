// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function minReturn(a,b) {
  if (a > b) {
    confirm(a);
  }else {
    confirm(b);
  }
}

minReturn(2, 5);
minReturn(-1, 3);
minReturn(1, 1);

// ----
//  ------------------------------------------------------------------------------------------------------------------------

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function exponentiation() {
  let firstNumber = prompt("Введите первое число", "");
  let secondNumber = prompt("Введите второе число", "");
  let result = firstNumber**secondNumber;
  if(firstNumber === null || secondNumber === null) {
    console.log("Вы нажали отмена!");
  } else if (firstNumber === "" || secondNumber === ""){
    console.log("Поля должны быть заполнены!");
  } else if (firstNumber == false || secondNumber == false) {
    console.log("Вы ввели 0!");
  } else if (firstNumber < 0 || secondNumber < 0) {
    console.log("Только натуральные числа!!");
  } else {
    console.log(result);
  }
}
exponentiation();

