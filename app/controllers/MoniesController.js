import { AppState } from "../AppState.js";


export class MoniesCollector {
  constructor() {
    AppState.on('money', this.drawMoney)
  }

  drawMoney() {
    const currentMoney = AppState.money
    const currentMoneyElem = document.getElementById('currentMoney')

    currentMoneyElem.innerHTML = `Wallet : $${currentMoney}`
  }


}