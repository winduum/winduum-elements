import { superConnect } from '../../index.js'

export class Drawer extends HTMLDialogElement {
  static parts = {
    $content: '',
  }

  static values = {
    $placement: 'left',
    $dialog: 'modal',
  }

  constructor() {
    super()
    superConnect(this)
  }

  connectedCallback() {
    this.addEventListener('scroll', this.scroll)
    this.addEventListener('click', this.dismiss)
  }

  async scroll({ target }) {
    const { scrollDrawer } = await import('winduum/src/components/drawer/index.js')

    const bottomTop = {
      snapClass: 'snap-y snap-mandatory',
      scrollSize: target.scrollHeight - target.clientHeight,
      scrollDirection: target.scrollTop,
    }

    const rightBottom = {
      scrollClose: 0,
      opacityRatio: 0,
    }

    const placement = {
      right: {
        ...rightBottom,
        scrollOpen: target.scrollWidth - target.clientWidth,
      },
      bottom: {
        ...rightBottom,
        ...bottomTop,
        scrollOpen: target.scrollHeight - target.clientHeight,
      },
      top: {
        ...bottomTop,
        scrollOpen: 0,
        scrollClose: target.scrollHeight - target.clientHeight,
      },
    }

    await scrollDrawer(target, placement[this.$placement])
  }

  async show() {
    const { showDrawer, scrollInitDrawer } = await import('winduum/src/components/drawer/index.js')

    if (this.$dialog === 'modal') {
      super.showModal()
    }
    else if (this.$dialog === 'non-modal') {
      super.show()
    }

    const [distance, distanceClosed, direction] = {
      right: [this.scrollWidth, 0, 'left'],
      bottom: [this.scrollHeight, 0, 'top'],
      top: [0, this.scrollHeight, 'top'],
    }[this.$placement] ?? []

    await scrollInitDrawer(this, distanceClosed, direction)

    await showDrawer(this, distance, direction)
  }

  async close() {
    const { closeDrawer } = await import('winduum/src/components/drawer/index.js')

    const [distance, direction] = {
      right: [0, 'left'],
      bottom: [0, 'top'],
      top: [this.scrollHeight, 'top'],
    }[this.$placement] ?? []

    await closeDrawer(this, distance, direction)
  }

  // TODO is needed?
  async dismiss({ target }) {
    if (!this.open) return

    if (!this.$content.contains(target) && !this.$content.isEqualNode(target)) {
      await this.close()
    }
  }
}
