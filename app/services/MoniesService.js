import { AppState } from "../AppState.js";


class MoniesService {
  addMoney(moneyAmount) {
    console.log(`Money before is ${AppState.money}`);
    AppState.money += moneyAmount
    console.log(`Money after is ${AppState.money}`);
  }

}

export const moniesService = new MoniesService()