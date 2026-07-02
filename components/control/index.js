import { dispatchCustomEvent } from '@newlogic-digital/utils-js'
import { WebuumElement } from 'webuum'

export class Control extends WebuumElement {
  $activeAttribute = 'data-active'

  connectedCallback() {
    this.toggleActiveAttribute()
    this.addEventListener('change', this.toggleActiveAttribute.bind(this), { signal: this.$signal })
  }

  toggleActiveAttribute() {
    const telCountryCode = this.querySelector('[autocomplete="tel-country-code"]')

    if (telCountryCode) telCountryCode.dataset.value = telCountryCode.value

    this.toggleAttribute(this.$activeAttribute, !!this.querySelector('input:not([type="hidden"]), textarea, select')?.value)
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
