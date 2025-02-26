import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";



export class SnacksController {
  constructor() {
    this.drawSnacks()
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let innerHTMLContent = ''
    const snackElem = document.getElementById('snackDisplaySection')

    snacks.forEach(snack => {
      innerHTMLContent += snack.snackHTMLTemplate
    })
    snackElem.innerHTML = innerHTMLContent
  }
  buySnack(snackName) {
    const snack = AppState.snacks.find(boughtSnack => boughtSnack.name == snackName)
    if (snack.price > AppState.money) {
      alert('Not enough dosh, pal!')
    } else {
      snacksService.buySnack(snack)
    }

  }
}