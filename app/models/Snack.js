export class Snack {
  constructor(snackName, snackPrice, snackPicture, snackDescription) {
    this.name = snackName
    this.price = snackPrice
    this.picture = snackPicture
    this.description = snackDescription
  }
  get snackHTMLTemplate() {
    return /*html*/`
    <div class="col-md-3">
      <div class="d-flex justify-content-center">
        <div class="card">
          <div class="card-body">
            <img src="${this.picture}" alt="${this.description}">
            <div class="card-title">
              <span>${this.name}</span><span>${this.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}