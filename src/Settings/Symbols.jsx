import { useContext } from "react";
import Context from "../Context";

export default function Symbols() {
  const { usableSymbols, usableSymbolsChecks, setUsableSymbols } =
    useContext(Context);

  return (
    <div className="Settings_Wrapper">
      <h3>Используемые знаки</h3>
      <div className="checkboxcont">
        <input
          type="checkbox"
          checked={usableSymbols[0].Use}
          onChange={() =>
            usableSymbolsChecks(1, usableSymbols, setUsableSymbols)
          }
        />
        <label>A-Z</label>
        <input
          type="checkbox"
          checked={usableSymbols[1].Use}
          onChange={() =>
            usableSymbolsChecks(2, usableSymbols, setUsableSymbols)
          }
        />
        <label>a-z</label>
        <input
          type="checkbox"
          checked={usableSymbols[2].Use}
          onChange={() =>
            usableSymbolsChecks(3, usableSymbols, setUsableSymbols)
          }
        />
        <label>0-9</label>
        <input
          type="checkbox"
          checked={usableSymbols[3].Use}
          onChange={() =>
            usableSymbolsChecks(4, usableSymbols, setUsableSymbols)
          }
        />
        <label>Спец. символы</label>
      </div>
    </div>
  );
}
