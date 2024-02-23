import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="test"
export default class extends Controller {
  static targets = ["working"]
  connect() {
    console.log("Hello World!")
    this.workingTarget.textContent = "It's working!"
  }
}
