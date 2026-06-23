import { WebuumElement } from 'webuum'

export class Toast extends WebuumElement {
  $showOptions
  $closeOptions

  connectedCallback() {
    this.showToast()
  }

  async showToast() {
    const { showToast } = await import('winduum/src/components/toast/index.js')

    await showToast(this, this.$showOptions)
  }

  async closeToast() {
    const { closeToast } = await import('winduum/src/components/toast/index.js')

    await closeToast(this, this.$closeOptions)
  }
}
