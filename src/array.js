// Напишите функцию sumInput(), которая:

//     Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
//     Подсчитывает и возвращает сумму элементов массива.

// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// const arr = [];
// const sumInput = () => {
//   while(true) {
//     const value = prompt("Введите цифры");
//     if(value === "" || value === null || !isFinite(value)) {
//       break;
//     } else {
//       arr.push(+value);
//     }
//   }
//   console.log(getSumNumbersArr());
// }

// const getSumNumbersArr = () => {
//   let sum = 0;
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum;
// }

// sumInput();


// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.


const arr = [1, 2, -3, 4, 5, 10];

const maxSubSum = () => {
  const maxSum = 0;

  for (let numbers of arr) {

    const sumStart = 0;

    for (let i = numbers; i < arr.length; i++) {

      sumStart += arr[i];
      maxSum = Math.max(maxSum, sumStart)
    }
  }
  console.log(maxSum);
}