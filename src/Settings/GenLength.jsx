import React, { useContext } from "react";
import Context from "../Context";

export default function GenLength() {
  const {
    genLength,
    setGenLength,
    genOnChange,
    setGeneratedPassword,
    generateHandler,
    usableSymbols,
  } = useContext(Context);

  return (
    <div className="Settings_Wrapper">
      <h3>Длинна генерируемого пароля: {genLength}</h3>
      <input
        type="range"
        min="8"
        max="64"
        value={genLength}
        onChange={(event) => {
          setGenLength(event.target.value);
          if (genOnChange === true) {
            setGeneratedPassword(generateHandler(genLength, usableSymbols));
          }
        }}
      />
    </div>
  );
}
