import { randomElement } from "../helpers/index.js";

export const DIRECTIONS = {
  up: "up",
  down: "down",
  right: "right",
  left: "left",
};

class Cometh {
  constructor(direction) {
    this.direction = direction || randomElement(Object.values(DIRECTIONS));
  }

  toString() {
    return "☄️ ";
  }

  get type() {
    return Cometh.type;
  }

  static type = 2;
}

export default Cometh;
