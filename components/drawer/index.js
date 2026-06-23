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

  async showModal({ source }) {
    const { showDrawer } = await import('winduum/src/components/drawer/index.js')

    this.$triggerElement = source

    if (this.open) return
    if (this.$modal) super.showModal()
    else super.show()

    source.ariaExpanded = true
    showDrawer(this.firstElementChild, this.$placement)
  }

  close() {
    super.close()

    if (this.$triggerElement) this.$triggerElement.ariaExpanded = false
  }
}
