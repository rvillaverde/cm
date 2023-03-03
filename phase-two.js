import Megaverse from "./types/megaverse.js";
import { fetchGoal } from "./api/map.js";
import { COLORS } from "./types/soloon.js";
import { DIRECTIONS } from "./types/cometh.js";
import { persistMegaverse } from "./helpers/map.js";

try {
  const megaverse = new Megaverse();

  const { goal } = await fetchGoal();

  for (let y = 0; y < goal.length; y++) {
    for (let x = 0; x < goal[y].length; x++) {
      const value = goal[y][x];

      switch (value) {
        case "POLYANET":
          megaverse.addPolyanet({ x, y });
          break;
        case "BLUE_SOLOON":
          megaverse.addSoloon({ x, y }, COLORS.blue);
          break;
        case "PURPLE_SOLOON":
          megaverse.addSoloon({ x, y }, COLORS.purple);
          break;
        case "RED_SOLOON":
          megaverse.addSoloon({ x, y }, COLORS.red);
          break;
        case "WHITE_SOLOON":
          megaverse.addSoloon({ x, y }, COLORS.white);
          break;
        case "UP_COMETH":
          megaverse.addCometh({ x, y }, DIRECTIONS.up);
          break;
        case "DOWN_COMETH":
          megaverse.addCometh({ x, y }, DIRECTIONS.down);
          break;
        case "LEFT_COMETH":
          megaverse.addCometh({ x, y }, DIRECTIONS.left);
          break;
        case "RIGHT_COMETH":
          megaverse.addCometh({ x, y }, DIRECTIONS.right);
          break;
        default:
          break;
      }
    }
  }

  console.log(megaverse.toString());

  // await clearMap();
  await persistMegaverse(megaverse);

  console.log("Megaverse created and persisted successfully!");
} catch (e) {
  console.error("There was an error creating and persisting the Megaverse:", e);
}
