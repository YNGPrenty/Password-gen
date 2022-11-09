import { getRandomPassword } from "./GetRandomPassword";
import { getRandomInt } from "./GetRandomInt";

export function generateHandler(slength, usableSymbols) {
  if (
    usableSymbols[0].Use === false &&
    usableSymbols[1].Use === false &&
    usableSymbols[2].Use === false &&
    usableSymbols[3].Use === false
  ) {
    let errors = [
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
      "ОШИБКА БЛЯТЬ, ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ МУДИЛА",
      "ОШИБКА , ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ",
    ];
    let num = getRandomInt(errors.length);
    return errors[num];
  }
  let symbols = [];
  for (let i = 0; i < 4; i++) {
    if (usableSymbols[i].Use) {
      symbols = symbols.concat(usableSymbols[i].symbs);
    }
  }
  let strpassword = getRandomPassword(slength, symbols);
  return strpassword;
}