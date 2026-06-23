import { initializeController } from 'webuum'

export class Drawer extends HTMLDialogElement {
  static parts = {
    $content: null,
  }

  static props = {
    $placement: 'left',
    $modal: true,
  }

  constructor() {
    super()
    initializeController(this)
    this.$controller = new AbortController()
  }

  async partConnectedCallback(name) {
    if (name === '$content') {
      const { drawerObserver, drawerEvents } = await import('winduum/src/components/drawer/index.js')
      const { signal } = this.$controller

      drawerEvents(this, this.$content, this.$placement, signal)

      this.$observer = drawerObserver(this, this.$placement)
      this.$observer.observe(this.$content)
    }
  }

  partDisconnectedCallback(name) {
    if (name === '$content') {
      this.$observer?.disconnect()
      this.$controller?.abort()
    }
  }

  async showModal() {
    const { showDrawer } = await import('winduum/src/components/drawer/index.js')

    if (this.$modal) super.showModal()
    else super.show()

    showDrawer(this.firstElementChild, this.$placement)
  }
}
