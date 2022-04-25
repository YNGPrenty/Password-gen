import { getRandomInt } from "./GetRandomInt";

export function getRandomPassword(slength, symbs) {
  let strpassword = "";
  for (let i = 0; i < slength; i++) {
    strpassword += symbs[getRandomInt(symbs.length)];
  }
  return strpassword;
}