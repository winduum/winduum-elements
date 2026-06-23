import { WebuumElement } from 'webuum'

export class Toaster extends WebuumElement {
  $closeOptions

  async close() {
    const { closeToaster } = await import('winduum/src/components/toaster/index.js')

    await closeToaster(this, this.$closeOptions)
  }
}
