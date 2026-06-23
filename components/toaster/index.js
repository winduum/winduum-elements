import { WebuumElement } from 'webuum'

export class Toaster extends WebuumElement {
  static props = {
    $close: null,
  }

  async close() {
    const { closeToaster } = await import('winduum/src/components/toaster/index.js')

    await closeToaster(this, this.$close)
  }
}
