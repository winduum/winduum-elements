import { validateForm } from 'winduum/src/components/form/index.js'
import { initializeController } from 'webuum'

export class Form extends HTMLFormElement {
  $validateFormOptions

  constructor() {
    super()
    initializeController(this)
  }

  connectedCallback() {
    this.$controller = new AbortController()
    const { signal } = this.$controller

    this.noValidate = true
    this.addEventListener('submit', this.validateForm, { signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  validateForm(event) {
    validateForm(event, this.$validateFormOptions)
  }
}
