// Какое последнее значение выведет этот код? Почему?

// let i = 3;
// while (i) {
//   alert( i-- );
// }

// ОТВЕТ

// выписывается число 3, после происходит декрементация на 1,
// выписывается число 2, после происходит декрементация на 1,
// выписывается число 1, после происходит декрементация на 1
// и далее не выпишит ничего поскольку 0 = 0, полученый в следствии декрементации

//  ------------------------------------------------------------------------------------------------------------------------

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?


// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert( i );

// Входит в цикл 0, происходит увеличение на 1, и так до 4 поскольку
// 5 не выпишут потому что сначала идет инкрементация потом сравнение и после выписывание

// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );

// Выписывает 1 и так до 5 потому что сначала идет выписывание после инкрементация
// и поэтому в постфиксном инкриментировании происходит выписывание 5 в конце

//  ------------------------------------------------------------------------------------------------------------------------

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i );

// Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i );

// Что в постфиксной что в префиксной формах выведет один и тот же ответ поскольку
// сначала идет декларирование переменной, после сравнение, увеличение, и потом выписывание

//  ------------------------------------------------------------------------------------------------------------------------

// При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 0; i <= 10; i=i+2) {
//   if (i === 0) {
//     continue;
//   }
//   console.log(i);
// }

//  ------------------------------------------------------------------------------------------------------------------------

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let firstVariable = 0;
// while (firstVariable < 3) {
//   alert( `number ${firstVariable}!` );
//   firstVariable++;
// }

//  ------------------------------------------------------------------------------------------------------------------------

// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.


// while(true) {
//   let secondVariable = prompt('Введите число больше чем 100!', '');

//   if (secondVariable === null) {
//     alert("Отмена!");
//     break;
//   }
//   else if(isNaN(secondVariable)) {
//     alert('Вводите только числа!');
//   }
//   else if(secondVariable <= 100) {
//     alert('Число меньше или равно 100');
//   }
//   else{
//     alert(secondVariable);
//     break;
//   };
// }
