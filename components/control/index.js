import { dispatchCustomEvent } from '@newlogic-digital/utils-js'
import { WebuumElement } from 'webuum'
import { validateField } from 'winduum/src/components/form'

export class Control extends WebuumElement {
  /**
   * @type {import('winduum/src/components/form/index.d.ts').ValidateFieldOptions}
   */
  $validateFieldOptions

  connectedCallback() {
    validateField(this, { validate: false })

    this.addEventListener('change', () => {
      const telCountryCode = this.querySelector('[autocomplete="tel-country-code"]')

      if (telCountryCode) telCountryCode.dataset.value = telCountryCode.value

      validateField(this, this.$validateFieldOptions)
    }, { signal: this.$signal })
  }

  stepUp() {
    this.querySelector('input').stepUp()
    dispatchCustomEvent(this.querySelector('input'))
  }

  stepDown() {
    this.querySelector('input').stepDown()
    dispatchCustomEvent(this.querySelector('input'))
  }

  showPicker() {
    this.querySelector('input').showPicker()
  }
}
