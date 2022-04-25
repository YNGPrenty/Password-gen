import React, { useContext } from "react";
import Context from "../Context";

export default function GenOnChange() {
  const { genOnChange, setGenOnChange } = useContext(Context);

  return (
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
  );
}
