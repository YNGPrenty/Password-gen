import { useState } from "react";
import "./App.scss";

function App() {
  let [generatedPassword, setGeneratedPassword] = useState("");
  let [title, setTitle] = useState("Генератор случайного пароля");
  let [genLength, setGenLength] = useState(20);
  let [genOnChange, setGenOnChange] = useState(false);
  let [usableSymbols, setUsableSymbols] = useState([
    {
      id: 1,
      name: "Symbols Upper",
      Use: true,
      symbs: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    },
    {
      id: 2,
      name: "Symbols Lower",
      Use: true,
      symbs: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
    },
    {
      id: 3,
      name: "Numbers",
      Use: true,
      symbs: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    {
      id: 4,
      name: "Special symbols",
      Use: true,
      symbs: ["!", "@", "#", "$", "%", "&", "*", ">", "<", "?"],
    },
  ]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomPassword(slength, symbs) {
    let strpassword = "";
    for (let i = 0; i < slength; i++) {
      strpassword += symbs[getRandomInt(symbs.length)];
    }
    return strpassword;
  }

  function generateHandler(slength) {
    if (
      usableSymbols[0].Use === false &&
      usableSymbols[1].Use === false &&
      usableSymbols[2].Use === false &&
      usableSymbols[3].Use === false
    ) {
      return "ОШИБКА БЛЯТЬ, ВКЛЮЧИ ХОТЯ-БЫ КАКИЕ НИБУДЬ СИМВОЛЫ МУДИЛА";
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

  function usableSymbolsChecks(id) {
    setUsableSymbols(
      usableSymbols.map((sym) => {
        if (sym.id === id) {
          sym.Use = !sym.Use;
        }
        return sym;
      })
    );
    return usableSymbols;
  }

  return (
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
          onClick={(event) => {
            setTitle("Скопированно!!");
            navigator.clipboard.writeText(event.target.value);
            setTimeout(() => {
              setTitle("Генератор случайного пароля");
            }, 1000);
          }}
        />
        <div className="Settings_Wrapper">
          <h3>Используемые знаки</h3>
          <div className="checkboxcont">
            <input
              type="checkbox"
              checked={usableSymbols[0].Use}
              onChange={() => usableSymbolsChecks(1)}
            />
            <label>A-Z</label>
            <input
              type="checkbox"
              checked={usableSymbols[1].Use}
              onChange={() => usableSymbolsChecks(2)}
            />
            <label>a-z</label>
            <input
              type="checkbox"
              checked={usableSymbols[2].Use}
              onChange={() => usableSymbolsChecks(3)}
            />
            <label>0-9</label>
            <input
              type="checkbox"
              checked={usableSymbols[3].Use}
              onChange={() => usableSymbolsChecks(4)}
            />
            <label>Спец. символы</label>
          </div>
        </div>
        <div className="Settings_Wrapper">
          <h3>Длинна генерируемого пароля: {genLength}</h3>       {" "}
          <input
            type="range"
            min="8"
            max="64"
            value={genLength}
            onChange={(event) => {
              setGenLength(event.target.value);
              if (genOnChange === true) {
                setGeneratedPassword(generateHandler(genLength));
              }
            }}
          />
        </div>
        <div className="Settings_Wrapper">
          <div className="checkboxcont">
            <input
              type="checkbox"
              id="genOnChange"
              checked={genOnChange}
              onChange={(event) => setGenOnChange(!genOnChange)}
            />
            <label htmlFor="genOnChange">
              Генерировать при изменении длинны генерации
            </label>
          </div>
        </div>
        <button
          onClick={() => setGeneratedPassword(generateHandler(genLength))}
        >
          Сгенерировать пароль
        </button>
      </div>
    </div>
  );
}

export default App;
