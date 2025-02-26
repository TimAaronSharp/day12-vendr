import { AppState } from "../AppState.js"


class SnacksService {
  buySnack(snack) {
    snack.stock--
    console.log(`${snack.name} was bought and I have $${AppState.money} left`);

  }
  restock() {
    const snacks = AppState.snacks.forEach(snack => {
      snack.stock = snack.maxStock
    })
    console.log(snacks)
  }
}

export const snacksService = new SnacksService()