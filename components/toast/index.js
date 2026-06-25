import { WebuumElement } from 'webuum'

/**
 * @typedef {import('winduum/src/components/toast/index.js').ShowToastOptions} ShowOptions
 * @typedef {import('winduum/src/components/toast/index.js').CloseToastOptions} CloseOptions
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
    const { showToast } = await import('winduum/src/components/toast/index.js')

    await showToast(this, this.$showOptions)
  }

  async close() {
    const { closeToast } = await import('winduum/src/components/toast/index.js')

    await closeToast(this, this.$closeOptions)
  }
}
