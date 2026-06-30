import { WebuumElement } from 'webuum'

/**
 * @typedef {import('winduum/src/components/toaster/index.d.ts').CloseToastOptions} CloseOptions
 */

export class Toaster extends WebuumElement {
  /**
   * @type {CloseOptions}
   */
  $closeOptions

  async connectedCallback() {
    const { toasterObserver } = await import('winduum/src/components/toaster/index.js')

    toasterObserver()
  }

  async close() {
    const { closeToaster } = await import('winduum/src/components/toaster/index.js')

    await closeToaster(this, this.$closeOptions)
  }
}
