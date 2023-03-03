export const CANDIDATE_ID = "71f2f11d-caed-4cce-a666-0d3cd8739d7d";
export const BASE_URL = "https://challenge.crossmint.io/api";

export const checkStatus = (response) => {
  if (response.ok) return response;

  const error = new Error(response.statusText);
  error.status = response.status;

  throw error;
};

export const format = (response) => response.json()

export const handleError = (e) => {
  console.log("Error fetching:", e.message, e.status);
}
