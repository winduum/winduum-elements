import { WebuumElement } from 'webuum'

export class Toast extends WebuumElement {
  static values = {
    $close: null,
    $show: null,
  }

  connect() {
    this.show()
  }

  async show() {
    const { showToast } = await import('winduum/src/components/toast/index.js')

    await showToast(this, this.$show)
  }

  async close() {
    const { closeToast } = await import('winduum/src/components/toast/index.js')

    await closeToast(this, this.$close)
  }
}
