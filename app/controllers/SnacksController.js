import { AppState } from "../AppState.js";



export class SnacksController {
  constructor() {
    console.log("Hey, the SnacksController works!");
    console.log(AppState.snacks);
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
}