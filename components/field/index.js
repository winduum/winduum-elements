import { WebuumElement } from 'webuum'
import { validateField } from 'winduum/src/components/form'

export class Field extends WebuumElement {
  /**
   * @type {import('winduum/src/components/form/index.d.ts').ValidateFieldOptions}
   */
  $validateFieldOptions

  connectedCallback() {
    this.addEventListener('change', () => validateField(this, this.$validateFieldOptions), { signal: this.$signal })
  }
}
