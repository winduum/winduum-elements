import { WebuumElement } from 'webuum'
import { validateField } from 'winduum/src/components/form'

export class Check extends WebuumElement {
  /**
   * @type {import('winduum/src/components/form/index.d.ts').ValidateFieldOptions}
   */
  $validateFieldOptions

  connectedCallback() {
    this.$controler = new AbortController()
    const { signal } = this.$controler

    this.addEventListener('change', () => validateField(this, this.$validateFieldOptions), { signal })
  }

  disconnectedCallback() {
    this.$controler?.abort()
  }
}
