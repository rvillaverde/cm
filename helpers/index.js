export const DELAY = 1500;

export const delay = (ms = DELAY) => new Promise((r) => setTimeout(r, ms));

export const random = (max, min = 0) => Math.floor(Math.random() * max) + min;

export const randomElement = (array) => array[random(array.length)];
