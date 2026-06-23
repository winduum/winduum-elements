import { WebuumElement } from 'webuum'
import { validateField } from 'winduum/src/components/form'

export class Check extends WebuumElement {
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
