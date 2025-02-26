import { AppState } from "../AppState.js";
import { moniesService } from "../services/MoniesService.js";


export class MoniesController {
  constructor() {
    // this.drawMoney()
    AppState.on('money', this.drawMoney)
    // console.log(`Current Money is - ${AppState.money}`);

  }

  drawMoney() {
    const money = AppState.money
    const moneyElem = document.getElementById('currentMoney')

    moneyElem.innerText = `Wallet : $${money}`
    console.log(`Current Money is - ${money}`);

  }

  addMoney(moneyAmount) {
    moniesService.addMoney(moneyAmount)
  }


}