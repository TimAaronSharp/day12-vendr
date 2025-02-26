import { AppState } from "../AppState.js";


class MoniesService {
  addMoney() {
    console.log(`Money before is ${AppState.money}`);
    AppState.money += 0.25
    console.log(`Money after is ${AppState.money}`);
  }

}

export const moniesService = new MoniesService()