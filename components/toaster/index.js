import { DefaultElement } from '../../index.js'

export class Toaster extends DefaultElement {
  static values = {
    $close: Object,
  }

  async close() {
    const { closeToaster } = await import('winduum/src/components/toaster/index.js')

    await closeToaster(this, this.$close)
  }
}
