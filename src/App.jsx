import { useState } from "react";
import "./App.scss";

import Context from "./Context";

import GenLength from "./Settings/GenLength";
import GenOnChange from "./Settings/GenOnChange";
import Symbols from "./Settings/Symbols";

import { getRandomInt } from "./Functions/GetRandomInt";
import { getRandomPassword } from "./Functions/GetRandomPassword";
import { generateHandler } from "./Functions/GenerateHandler";
import { usableSymbolsChecks } from "./Functions/UsableSymbolsCheck";
import { copyToClipboard } from "./Functions/CopyToClipboard";

import usableSymbolsArray from "./Data";

function App() {
  let [generatedPassword, setGeneratedPassword] = useState("");
  let [title, setTitle] = useState("Генератор случайного пароля");
  let [genLength, setGenLength] = useState(20);
  let [genOnChange, setGenOnChange] = useState(false);
  let [usableSymbols, setUsableSymbols] = useState(usableSymbolsArray);

  return (
    <Context.Provider
      value={{
        generatedPassword,
        setGeneratedPassword,
        genLength,
        setGenLength,
        genOnChange,
        setGenOnChange,
        usableSymbols,
        setUsableSymbols,
        getRandomInt,
        getRandomPassword,
        generateHandler,
        usableSymbolsChecks,
      }}
    >
      <div className="App App_Center">
        <h1>{title}</h1>
        <p>
          {generatedPassword.length > 0
            ? "Вы можете нажать на текстовое поле чтобы скопировать пароль"
            : null}
        </p>
        <div className="App_Container">
          <input
            placeholder="Тут будет ваш пароль"
            type="text"
            readOnly
            value={generatedPassword}
            onClick={(event) => copyToClipboard(event.target.value, setTitle)}
          />
          <Symbols />
          <GenLength />
          <GenOnChange />
          <button
            onClick={() =>
              setGeneratedPassword(generateHandler(genLength, usableSymbols))
            }
          >
            Сгенерировать пароль
          </button>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
