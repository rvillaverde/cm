import fetch from "node-fetch";
import {
  BASE_URL,
  CANDIDATE_ID,
  checkStatus,
  format,
  handleError,
} from "./index.js";

/**
 * Calls API to fetch map
 */
export const fetchMap = async () => {
  return fetch(`${BASE_URL}/map/${CANDIDATE_ID}`, {})
    .then(checkStatus)
    .then(format)
    .catch(handleError);
};

/**
 * Calls API to fetch goal map
 */
export const fetchGoal = async () => {
  return fetch(`${BASE_URL}/map/${CANDIDATE_ID}/goal`, {})
    .then(checkStatus)
    .then(format)
    .catch(handleError);
};
