import Cometh from "./cometh.js";
import Matrix from "./matrix.js";
import Polyanet from "./polyanet.js";
import Soloon from "./soloon.js";

const HEIGHT = 30;
const WIDTH = 30;

class Megaverse {
  constructor() {
    this.matrix = new Matrix(WIDTH, HEIGHT, "🌌");
  }

  get height() {
    return this.matrix.height;
  }

  get width() {
    return this.matrix.width;
  }

  get comeths() {
    const comeths = [];

    for (const { value, x, y } of this.matrix) {
      if (!this.matrix.isEmpty(x, y) && value.type === Cometh.type) {
        comeths.push({ cometh: value, x, y });
      }
    }

    return comeths;
  }

  get polyanets() {
    const polyanets = [];

    for (const { value, x, y } of this.matrix) {
      if (!this.matrix.isEmpty(x, y) && value.type === Polyanet.type) {
        polyanets.push({ polyanet: value, x, y });
      }
    }

    return polyanets;
  }

  get soloons() {
    const soloons = [];

    for (const { value, x, y } of this.matrix) {
      if (!this.matrix.isEmpty(x, y) && value.type === Soloon.type) {
        soloons.push({ soloon: value, x, y });
      }
    }

    return soloons;
  }

  addCometh = ({ x, y }, direction) => {
    this.matrix.set(x, y, new Cometh(direction));
  };

  addPolyanet = ({ x, y }) => {
    this.matrix.set(x, y, new Polyanet());
  };

  addSoloon = ({ x, y }, color) => {
    this.matrix.set(x, y, new Soloon(color));
  };

  toString() {
    return this.matrix.toString();
  }
}

export default Megaverse;
