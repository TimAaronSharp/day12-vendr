import { AppState } from "../AppState.js";
import { moniesService } from "../services/MoniesService.js";


export class MoniesController {
  constructor() {
    // this.drawMoney()
    AppState.on('money', this.drawMoney)
    AppState.on('change', this.drawChange)
    // console.log(`Current Money is - ${AppState.money}`);

  }

  drawMoney() {
    const money = AppState.money
    const moneyElem = document.getElementById('currentMoney')
    moneyElem.innerText = `Vendr : $${money}`
    console.log(`Current Money is - ${money}`);
  }

  drawChange() {
    const change = AppState.change
    const changeElem = document.getElementById('currentChange')
    changeElem.innerText = `Change: $${change}`
  }

  addMoney(moneyAmount) {
    moniesService.addMoney(moneyAmount)
  }

  chargeMoney(snackName) {
    const snack = AppState.snacks.find(chosenSnack => chosenSnack.name == snackName)

    if (snack.price > AppState.money) {
      alert('Not enough dosh, pal!')
      return
    }
    if (snack.stock < 1) {
      return
    } else {
      console.log("chargeMoney is working so far!");

      moniesService.chargeMoney(snack)
    }
  }

  giveChange() {
    moniesService.giveChange()
  }


}