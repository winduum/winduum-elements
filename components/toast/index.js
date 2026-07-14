import { WebuumElement } from 'webuum'
import { showToast, closeToast } from 'winduum/src/components/toast'

/**
 * @typedef {import('winduum/src/components/toast/index.d.ts').ShowToastOptions} ShowOptions
 * @typedef {import('winduum/src/components/toast/index.d.ts').CloseToastOptions} CloseOptions
 */

export class Toast extends WebuumElement {
  /**
   * @type {ShowOptions}
   */
  $showOptions
  /**
   * @type {CloseOptions}
   */
  $closeOptions

  connectedCallback() {
    this.show()
  }

  async show() {
    await showToast(this, this.$showOptions)
  }

  async close() {
    await closeToast(this, this.$closeOptions)
  }
}
