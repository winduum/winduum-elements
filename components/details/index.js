import { defineElement } from 'webuum'

export class Details extends HTMLDetailsElement {
  /**
   * @type {import('winduum/src/components/details/index.d.ts').ToggleDetailsOptions}
   */
  $toggleOptions

  constructor() {
    super()
    defineElement(this)
  }

  connectedCallback() {
    this.addEventListener('change', this.toggleDetails.bind(this), { signal: this.$signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  async toggleDetails({ target }) {
    if (!target.closest('summary')) return

    const { toggleDetails } = await import('winduum/src/components/details/index.js')

    toggleDetails(target, this.$toggleOptions)
  }
}
