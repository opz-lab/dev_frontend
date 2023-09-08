export const terraLCDURL = (name?: String) => {
  switch (name) {
    case "mainnet":
      return "https://phoenix-lcd.terra.dev"
    case "testnet":
      return "https://pisco-lcd.terra.dev"
    case "classic":
      return "https://columbus-lcd.terra.dev"
    case "localterra":
      return "http://localhost:1317"
    default:
      return ""
  }
}
