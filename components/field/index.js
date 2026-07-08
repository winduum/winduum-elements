import { WebuumElement } from 'webuum'
import { validateField } from 'winduum/src/components/field'

export class Field extends WebuumElement {
  /**
   * @type {import('winduum/src/components/field/index.d.ts').ValidateFieldOptions}
   */
  $validateFieldOptions

  connectedCallback() {
    this.addEventListener('change', () => validateField(this, this.$validateFieldOptions), { signal: this.$signal })
  }
}
