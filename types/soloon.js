import { randomElement } from "../helpers/index.js";

export const COLORS = {
  blue: "blue",
  purple: "purple",
  red: "red",
  white: "white",
};

class Soloon {
  constructor(color) {
    this.color = color || randomElement(Object.values(COLORS));
  }

  toString() {
    return "🌕";
  }

  get type() {
    return Soloon.type;
  }

  static type = 1;
}

export default Soloon;
