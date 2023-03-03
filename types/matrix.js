import MatrixIterator from "./matrix-iterator.js";

class Matrix {
  constructor(width, height, placeholder = "·") {
    this.width = width;
    this.height = height;
    this.placeholder = placeholder;

    this.matrix = Array(this.height)
      .fill()
      .map(() => Array(this.width).fill(null));
  }

  set = (x, y, value) => (this.matrix[y][x] = value);

  unset = (x, y) => (this.matrix[y][x] = null);

  get = (x, y) => this.matrix[y][x];

  isEmpty = (x, y) => !this.matrix[y][x];

  isValidCoord = (x, y) =>
    x >= 0 && x < this.width && y >= 0 && y < this.height;

  toString() {
    let string = "";

    this.matrix.forEach((rows, i) => {
      if (i > 0) {
        string = string.concat("\n");
      }

      rows.forEach((value, j) => {
        if (j > 0) {
          string = string.concat(" ");
        }

        string = string.concat(value || this.placeholder);
      });
    });

    return string;
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

export default Matrix;
