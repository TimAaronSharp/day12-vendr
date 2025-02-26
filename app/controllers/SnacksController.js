import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";



export class SnacksController {
  constructor() {
    AppState.on('boughtSnacks', this.drawBoughtSnacks)
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
      AppState.boughtSnacks.push(snack)

      console.log(`I have bought ${AppState.boughtSnacks}`);
    }
  }
  drawBoughtSnacks() {
    const boughtSnacks = AppState.boughtSnacks
    let innerHTMLContent = ''
    const boughtSnackElem = document.getElementById('boughtSnacksSection')

    boughtSnacks.forEach(boughtSnack => {
      innerHTMLContent += boughtSnack.boughtSnackHTMLTemplate
    })
    boughtSnackElem.innerHTML = innerHTMLContent
  }
}