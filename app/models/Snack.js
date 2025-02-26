export class Snack {
  constructor(snackName, snackPrice, snackPicture, snackDescription) {
    this.name = snackName
    this.price = snackPrice
    this.picture = snackPicture
    this.description = snackDescription
    this.stock = 4
    this.maxStock = this.stock
  }
  get snackHTMLTemplate() {
    return /*html*/`
    <div class="col-md-2 mb-2">
      <div class="d-flex justify-content-center text-center">
        <div class="card">
          <div class="card-body">
            <img src="${this.picture}" alt="${this.description}" class="snacks">
            <div class="card-title snacks-fs">
              <span>${this.name} </span><span>$${this.price}</span>
            </div>
            <button onclick="app.moniesController.chargeMoney('${this.name}'),  app.snacksController.buySnack('${this.name}')" class="btn btn-success">+</button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get boughtSnackHTMLTemplate() {
    return /*html*/`
    <div class="col-md-2">
      <div class="d-flex justify-content-center text-center">
        <div class="card">
          <div class="card-body">
            <img src="${this.picture}" alt="${this.description}" class="snacks">
            <div class="card-title">
              <p>${this.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        `
  }
}