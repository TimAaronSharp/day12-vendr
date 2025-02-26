import { AppState } from "../AppState.js";


class MoniesService {
  addMoney(moneyAmount) {
    console.log(`Money before is ${AppState.money}`);
    AppState.money += moneyAmount
    console.log(`Money after is ${AppState.money}`);
  }
  giveChange() {
    AppState.change += AppState.money
    AppState.money = 0
  }
  chargeMoney(snack) {
    console.log(`moniesService money before ${AppState.money}`)
    AppState.money -= snack.price
    console.log(`moniesService money after ${AppState.money}`)

  }

}

export const moniesService = new MoniesService()