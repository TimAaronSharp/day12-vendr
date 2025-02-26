import { ExampleController } from './controllers/ExampleController.js';
import { MoniesController } from './controllers/MoniesController.js';
import { SnacksController } from './controllers/SnacksController.js';

class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only
  snacksController = new SnacksController()
  moniesController = new MoniesController()
}

window['app'] = new App()


