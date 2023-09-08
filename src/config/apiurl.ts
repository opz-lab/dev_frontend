export const terraAPIURL = (name?: String) => {
  switch (name) {
    case "mainnet":
      return "https://phoenix-api.terra.dev"
    case "testnet":
      return "https://pisco-api.terra.dev"
    case "classic":
      return "https://api.terrarebels.net"
    default:
      return ""
  }
}
