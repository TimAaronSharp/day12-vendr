import { AppState } from "../AppState.js"


class SnacksService {
  buySnack(snack) {
    AppState.money -= snack.price
    console.log(`${snack.name} was bought and I have $${AppState.money} left`);

  }
}

export const snacksService = new SnacksService()