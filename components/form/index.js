import { validateForm } from 'winduum/src/components/form/index.js'
import { initializeController } from 'webuum'

export class Form extends HTMLFormElement {
  static values = {
    $validate: null,
  }

  constructor() {
    super()
    initializeController(this)
  }

  connectedCallback() {
    this.noValidate = true
    this.addEventListener('submit', this.validateForm)
  }

  validateForm(event) {
    validateForm(event, this.$validate)
  }

  // TODO needs alternative
  // validateField({ currentTarget, params }) {
  //   validateField(currentTarget, params)
  // }
}
