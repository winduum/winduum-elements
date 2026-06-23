import { dispatchCustomEvent } from '@newlogic-digital/utils-js'
import { WebuumElement } from 'webuum'
import { validateField } from 'winduum/src/components/form'

export class Control extends WebuumElement {
  $validateFieldOptions

  connectedCallback() {
    validateField(this.element, { validate: false })

    this.$controler = new AbortController()
    const { signal } = this.$controler

    this.addEventListener('change', () => {
      const telCountryCode = this.element.querySelector('[autocomplete="tel-country-code"]')

      if (telCountryCode) telCountryCode.dataset.value = telCountryCode.value

      validateField(this, this.$validateFieldOptions)
    }, { signal })
  }

  disconnectedCallback() {
    this.$controler?.abort()
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
