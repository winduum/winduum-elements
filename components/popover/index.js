import { WebuumElement } from 'webuum'
import { supportsAnchoredContainer, supportsAnchor } from 'winduum/src/common.js'

export class Popover extends WebuumElement {
  $open = false

  static props = {
    $autoUpdate: null,
    $placement: null,
  }

  connectedCallback() {
    this.$controller = new AbortController()
    const { signal } = this.$controller

    this.addEventListener('toggle', (event) => {
      this.$open = event.newState === 'open'
      if (this.$source.ariaExpanded) this.$source.ariaExpanded = this.$open
    }, { signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  async showPopover({ source }) {
    if ((this.$autoUpdate && !supportsAnchoredContainer) || !supportsAnchor) {
      const { autoUpdatePopover } = await import('winduum/src/components/popover/index.js')

      this.$cleanup = await autoUpdatePopover(source, this, this.$placement, this.$autoUpdate)
    }

    this.$source = source

    super.showPopover({ source })
  }

  togglePopover({ source }) {
    !this.$open
      ? this.showPopover({ source })
      : this.hidePopover()
  }

  hidePopover() {
    this.$cleanup?.()

    super.hidePopover()
  }
}
