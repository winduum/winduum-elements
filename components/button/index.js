import { WebuumElement } from 'webuum'

export class Button extends WebuumElement {
  static values = {
    $loading: true,
  }

  $loadingAttribute = 'data-loading'
  $spinnerSelector = '.spinner-absolute'
  $spinnerHTML = `<span class="spinner spinner-absolute"></span>`

  connectedCallback() {
    this.$observer = new MutationObserver(() => {
      const isLoading = this.hasAttribute(this.$loadingAttribute)

      if (isLoading && this.querySelector(this.$spinnerSelector)) return

      if (isLoading) {
        this.insertAdjacentHTML('beforeend', this.$spinnerHTML)
      }
      else {
        this.querySelector(this.$spinnerSelector).remove()
      }

      this.disabled = isLoading
    })

    this.$loading && this.$observer.observe(this, {
      attributeFilter: [this.$loadingAttribute],
    })

    this.addEventListener('click', this.ripple)
  }

  disconnectedCallback() {
    this.$observer.disconnect()
  }

  async ripple({ currentTarget, offsetX, offsetY }) {
    const { showRipple } = await import('winduum/src/utilities/ripple')

    showRipple({
      currentTarget,
      offsetX,
      offsetY,
    })
  }
}
