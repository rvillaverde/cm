import fetch from "node-fetch";
import { DELAY, delay } from "../helpers/index.js";
import {
  BASE_URL,
  CANDIDATE_ID,
  checkStatus,
  format,
  handleError,
} from "./index.js";

/**
 * Calls API to add a soloon in the given row and column
 *
 * @param {number} row
 * @param {number} column
 * @param {COLOR} color
 */
export const addSoloon = async (row, column, color) => {
  console.log(
    `Adding soloon at position (${row}, ${column}) with color ${color}`
  );

  const body = {
    candidateId: CANDIDATE_ID,
    color,
    column,
    row,
  };

  return fetch(`${BASE_URL}/soloons`, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(checkStatus)
    .then(format)
    .catch(handleError);
};

/**
 * Calls API to add the soloons with a delay of 1500ms between each request
 *
 * @param {array} soloons
 */
export const addSoloons = async (soloons) =>
  Promise.all(
    soloons.map(async ({ soloon, x, y }, i) =>
      delay((i + 1) * DELAY).then(() => addSoloon(y, x, soloon.color))
    )
  );

/**
 * Calls API to remove a soloon in the given row and column
 *
 * @param {number} row
 * @param {number} column
 */
export const removeSoloon = async (row, column) => {
  console.log(`Removing soloon at position (${row}, ${column})`);

  const body = {
    candidateId: CANDIDATE_ID,
    column,
    row,
  };

  return fetch(`${BASE_URL}/soloons`, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then(checkStatus)
    .then(format)
    .catch(handleError);
};

/**
 * Calls API to remove the soloons with a delay of 1500ms between each request
 *
 * @param {array} coords
 */
export const removeSoloons = async (coords) =>
  Promise.all(
    coords.map(async ({ x, y }, i) =>
      delay((i + 1) * DELAY).then(() => removeSoloon(y, x))
    )
  );
