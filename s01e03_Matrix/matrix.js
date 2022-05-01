// Matrix structure:
//
// #      0  1  2
//
// 0   [ [1, 2, 3],
// 1     [4, 5, 6],
// 2     [7, 8, 9] ]
//

function logEachMatrixItem(matrix) {    // функция выведение всех элементов матрицы на экран
  console.log('\nLog each matrix item:');

  for (let i = 0; i < matrix.length; i++) {   // длина матрицы определяется числом строк, т.е. проходим по строчкам - зашли в первую строчку и входим в след.цикл
    for (let j = 0; j < matrix[i].length; j++) {  // тут проходим по элементам данной строчки
      console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
    }
  }
}

// console.log(matrix.flat().length);  // выведет количество всех элементов в матрице

function showMatrix(matrix) {    // более понятное и красивое предстваление матрицы
  console.log('\nShow matrix:');

  for (let i = 0; i < matrix.length; i++) {
    console.log( matrix[i].join(' ') );  // .join метод массива, который соединяет все элементы массива + добавляет ' '
  }
}

function showSumByRow(matrix) {   // получение массива сумм элементов в строках
  console.log('\nShow sum by row:');

  let sumResults = [];
  let sum;

  for (let i = 0; i < matrix.length; i++) {
    sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }

    sumResults.push(sum);   // объединяет два или более массивов без изменения текущего
                            // т.е. добавляет в массив накопленные значения, добавляя к имеющимся.
  }

  console.log('  result -', sumResults);
}

function findColumnsWithZero(matrix) {  // получение колонок(столбцов) имеющих элемент 0(ноль)
  // consider that we have matrix with some data

  console.log('\nFind columns with 0:');

  let columnsWithZeroIdx = [];

  let columnCount = matrix[0].length;  // подсчет количества столбцов, так как матрица квадратная, на примере первой строки.
                                        // количество строк мы итак знаем -  matrix.length
  for (let i = 0; i < columnCount; i++) {   // проходим по столбцам, то есть зашли в первый столбец и входим в след.цикл
    for (let j = 0; j < matrix.length; j++) {   // далее идем по строчкам, по всем элементам строки
      if (matrix[j][i] === 0) {
        columnsWithZeroIdx.push(i);
        break;
      }
    }
  }

  console.log('  result indexes -', columnsWithZeroIdx);
}

function snakeBypass(matrix) {   // змеёй проходит по строчкам: 1ая строка - слева направо,
  // 2ая строка справа налево. Т.е. нечетные строки - слева направо и четные строки - справа налево
  console.log('\nSnake bypass:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0   // если true
        ? j                         // то в columnIdx записывается текущий j
        : (matrix[i].length - j - 1);   // иначе в columnIdx записывается результат этого выражения
        // высчитывается индекс последнего элемента из массива данной строчки(matrix[i].length-1)
        // + отнимается шаг по счетчику j, на первом шаге j==0. С увеличением счетчика осуществляется
        // проход по массиву от последнего элемента к первому.
      console.log( matrix[i][columnIdx]);
    }
  }
}

function snakeAllBypass(matrix) { // обход массива от последнего элемента к первому
  console.log('\nSnake all bypass:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log( matrix[matrix.length - i - 1][matrix[i].length - j - 1]);
    }
  }
}

function logMainDiag(matrix) {   // выведение гланой диагонали
  console.log('\nMain diag:');

  for (let i = 0; i < matrix.length; i++) {
    console.log( matrix[i][i] );   // квадратная матрица i==j, поэтому оба индекса i
  }
}

function logSideDiag(matrix) {    // выведение побочной диагонали
  console.log('\nSide diag:');

  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    console.log( matrix[i][n - i - 1] );
  }
}

function showBottomMainTriangle(matrix) {
  console.log('\nBottom main triangle:');

  let row;

  for (let i = 0; i < matrix.length; i++) {
    row = [];

    for (let j = 0; j <= i; j++) {
      // action
      row.push( matrix[i][j] );
    }

    console.log( row.join(' ') );
  }
}

console.log('s01e03 - Matrix\n');

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 3, 6, 9],
  [6, 8, 0, 2],
];


// logEachMatrixItem(matrix);   // функция выведение всех элементов матрицы на экран
// showMatrix(matrix);   // более понятное и красивое предстваление матрицы

// showSumByRow(matrix);  // получение массива сумм элементов в строках

// findColumnsWithZero(matrix);  // получение колонок(столбцов) имеющих элемент 0(ноль)

let smallMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// showMatrix(smallMatrix);
// snakeBypass(smallMatrix);
// snakeAllBypass(smallMatrix);

// logMainDiag(matrix);   // выведение гланой диагонали
// logSideDiag(matrix);   // выведение побочной диагонали

showMatrix(matrix);
showBottomMainTriangle(matrix);
