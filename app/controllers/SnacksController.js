import { AppState } from "../AppState.js";



export class SnacksController {
  constructor() {
    console.log("Hey, the SnacksController works!");
    console.log(AppState.snacks);

  }
}