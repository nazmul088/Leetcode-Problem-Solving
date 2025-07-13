function isValidSubBoard(i, j, board) {
  let num = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 3; l++) {
      let index = Number(board[i + k][j + l]) - 1;
      if (index === NaN) {
        continue;
      }
      num[index] = num[index] + 1;
      if (num[index] === 2) {
        return false;
      }
    }
  }

  return true;
}

function isValidSudokuRowWise(board) {
  for (let i = 0; i < 9; i++) {
    let num = new Array(10);
    num = num.fill(0);
    for (let j = 0; j < 9; j++) {
      let index = Number(board[i][j]);
      if (index === NaN) {
        continue;
      }
      num[index] = num[index] + 1;
      if (num[index] > 1) {
        return false;
      }
    }
  }

  return true;
}

function isValidSudokuColumnWise(board) {
  for (let i = 0; i < 9; i++) {
    let num = new Array(10);
    num = num.fill(0);
    for (let j = 0; j < 9; j++) {
      let index = Number(board[j][i]);
      num[index] = num[index] + 1;
      if (index === NaN) {
        continue;
      }
      if (num[index] > 1) {
        return false;
      }
    }
  }

  return true;
}

function isValidSudoku(board) {
  for (let i = 6; i < 7; i = i + 3) {
    for (let j = 0; j < 7; j = j + 3) {
      let isValid = isValidSubBoard(i, j, board);
      if (!isValid) {
        console.log('asche');
        return false;
      }
    }
  }

  let result1 = isValidSudokuRowWise(board);

  if (!result1) {
    return false;
  }
  let result2 = isValidSudokuColumnWise(board);
  if (!result2) {
    return false;
  }

  return true;
}

const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));
