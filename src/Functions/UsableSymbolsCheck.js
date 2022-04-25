export function usableSymbolsChecks(id, usableSymbols, setUsableSymbols) {
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
