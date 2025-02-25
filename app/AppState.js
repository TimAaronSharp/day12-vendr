import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  snacks = [
    new Snack('Legally Distinct Cheese Corn Chip', 1.50, '../assets/img/doritos.png', 'cheese corn chips'),
    new Snack('Legally Distinct Mini Chocolate Donuts', 2.00, '../assets/img/chocolate-donuts.png', 'mini chocolate donuts'),
    new Snack('Legally Distinct Mini Powdered Donuts', 2.00, '../assets/img/powdered-donuts.png', 'mini powdered donuts'),
    new Snack('Legally Distinct Potato Chips', 1.50, '../assets/img/potato-chips.png', 'plain potato chips')
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())