class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next = () => {
    if (this.y === this.matrix.height) {
      return { done: true };
    }

    const value = {
      value: this.matrix.get(this.x, this.y),
      x: this.x,
      y: this.y,
    };

    this.x++;

    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }

    return { value, done: false };
  };
}

export default MatrixIterator;
