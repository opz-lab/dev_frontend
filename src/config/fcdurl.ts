export const terraFCDURL = (name?: String) => {
  switch (name) {
    case "mainnet":
      return "https://phoenix-fcd.terra.dev"
    case "testnet":
      return "https://pisco-fcd.terra.dev"
    case "classic":
      return "https://columbus-fcd.terra.dev"
    case "localterra":
      return "http://localhost:3060"
    default:
      return ""
  }
}
