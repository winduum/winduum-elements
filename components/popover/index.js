import { DefaultElement, supportsAnchor } from '../../index.js'

export class Popover extends DefaultElement {
  $open = false

  static values = {
    $autoUpdate: null,
    $placement: null,
  }

  connectedCallback() {
    this.addEventListener('toggle', (event) => {
      this.$open = event.newState === 'open'
      if (this.$source.ariaExpanded) this.$source.ariaExpanded = this.$open
    })
  }

  async showPopover({ source }) {
    if (this.$autoUpdate || !supportsAnchor) {
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
