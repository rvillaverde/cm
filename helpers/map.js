import { addComeths, removeComeths } from "../api/cometh.js";
import { fetchMap } from "../api/map.js";
import { addPolyanets, removePolyanets } from "../api/polyanet.js";
import { addSoloons, removeSoloons } from "../api/soloon.js";
import Cometh from "../types/cometh.js";
import Polyanet from "../types/polyanet.js";
import Soloon from "../types/soloon.js";

/**
 * Calls the API to remove all polyanets, soloons and comthes in the map
 */
export const clearMap = async () => {
  const { map } = await fetchMap();
  const { content } = map;

  const polyanetsToRemove = [];
  const soloonsToRemove = [];
  const comethsToRemove = [];

  for (let y = 0; y < content.length; y++) {
    for (let x = 0; x < content[y].length; x++) {
      if (!content[y][x]) {
        continue;
      }

      if (content[y][x].type === Polyanet.type) {
        polyanetsToRemove.push({ x, y });
      }

      if (content[y][x].type === Soloon.type) {
        soloonsToRemove.push({ x, y });
      }

      if (content[y][x].type === Cometh.type) {
        comethsToRemove.push({ x, y });
      }
    }
  }

  await removePolyanets(polyanetsToRemove);
  await removeSoloons(soloonsToRemove);
  await removeComeths(comethsToRemove);
};

/**
 * Calls the API to add polyanets, soloons and comeths in the megaverse
 * 
 * @param {Megaverse} megaverse 
 */
export const persistMegaverse = async (megaverse) => {
  const { comeths, polyanets, soloons } = megaverse;

  await addPolyanets(polyanets);
  await addSoloons(soloons);
  await addComeths(comeths);
};
