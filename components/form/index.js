import { validateForm } from 'winduum/src/components/form/index.js'
import { defineElement } from 'webuum'

export class Form extends HTMLFormElement {
  /**
   * @type {import('winduum/src/components/form/index.d.ts').ValidateFormOptions}
   */
  $validateFormOptions

  constructor() {
    super()
    defineElement(this)
  }

  connectedCallback() {
    this.noValidate = true
    this.addEventListener('submit', this.validateForm, { signal: this.$signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  validateForm(event) {
    validateForm(event, this.$validateFormOptions)
  }
}
