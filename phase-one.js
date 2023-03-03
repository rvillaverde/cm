import { addPolyanet } from "./api/polyanet.js";

const MEGAVERSE_SIZE = 11;

/**
 * Creates a cross in the center of the matrix with the given size
 *
 * @param {number} size
 */
const createPolyanetCross = async (size) => {
  if (size <= 0) {
    throw new Error("Cross size has to be greater than zero.");
  }

  if (size % 2 === 0) {
    throw new Error("Cross size has to be uneven.");
  }

  if (size > MEGAVERSE_SIZE) {
    throw new Error(`Cross size has to be smaller than ${MEGAVERSE_SIZE}.`);
  }

  const start = (MEGAVERSE_SIZE - size) / 2;

  for (let i = start; i < size + start; i++) {
    await addPolyanet(i, i).catch((e) => Promise.reject(e));

    await addPolyanet(i, MEGAVERSE_SIZE - 1 - i).catch((_) =>
      Promise.reject(e)
    );
  }

  return Promise.resolve("Polyanet cross created successfully.");
};

try {
  await createPolyanetCross(7);
} catch (e) {
  console.error("There was an error creating the Polyanet cross:", e);
}
