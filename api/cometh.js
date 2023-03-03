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
 * Calls API to add a cometh in the given row and column
 *
 * @param {number} row
 * @param {number} column
 * @param {DIRECTION} direction
 */
export const addCometh = async (row, column, direction) => {
  console.log(
    `Adding cometh at position (${row}, ${column}) with direction ${direction}`
  );

  const body = {
    candidateId: CANDIDATE_ID,
    column,
    direction,
    row,
  };

  return fetch(`${BASE_URL}/comeths`, {
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
 * Calls API to add the comeths with a delay of 1500ms between each request
 *
 * @param {array} comeths
 */
export const addComeths = async (comeths) =>
  Promise.all(
    comeths.map(async ({ cometh, x, y }, i) =>
      delay((i + 1) * DELAY).then(() => addCometh(y, x, cometh.direction))
    )
  );

/**
 * Calls API to remove a cometh in the given row and column
 *
 * @param {number} row
 * @param {number} column
 */
export const removeCometh = async (row, column) => {
  console.log(`Removing cometh at position (${row}, ${column})`);

  const body = {
    candidateId: CANDIDATE_ID,
    column,
    row,
  };

  return fetch(`${BASE_URL}/comeths`, {
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
 * Calls API to remove the comeths with a delay of 1500ms between each request
 *
 * @param {array} coords
 */
export const removeComeths = async (coords) =>
  Promise.all(
    coords.map(async ({ x, y }, i) =>
      delay((i + 1) * DELAY).then(() => removeCometh(y, x))
    )
  );
