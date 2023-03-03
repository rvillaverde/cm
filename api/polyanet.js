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
 * Calls API to add a polyanet in the given row and column
 *
 * @param {number} row
 * @param {number} column
 */
export const addPolyanet = async (row, column) => {
  console.log(`Adding polyanet at position (${row}, ${column})`);

  const body = {
    candidateId: CANDIDATE_ID,
    column,
    row,
  };

  return fetch(`${BASE_URL}/polyanets`, {
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
 * Calls API to add the polyanets with a delay of 1500ms between each request
 *
 * @param {array} polyanets
 */
export const addPolyanets = async (polyanets) =>
  Promise.all(
    polyanets.map(async ({ x, y }, i) =>
      delay((i + 1) * DELAY).then(() => addPolyanet(y, x))
    )
  );

/**
 * Calls API to remove a polyanet in the given row and column
 *
 * @param {number} row
 * @param {number} column
 */
export const removePolyanet = async (row, column) => {
  console.log(`Removing polyanet at position (${row}, ${column})`);

  const body = {
    candidateId: CANDIDATE_ID,
    column,
    row,
  };

  return fetch(`${BASE_URL}/polyanets`, {
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
 * Calls API to remove the polyanets with a delay of 1500ms between each request
 *
 * @param {array} coords
 */
export const removePolyanets = async (coords) =>
  Promise.all(
    coords.map(async ({ x, y }, i) =>
      delay((i + 1) * DELAY).then(() => removePolyanet(y, x))
    )
  );
