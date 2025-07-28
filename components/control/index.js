import { dispatchCustomEvent } from '@newlogic-digital/utils-js'
import { DefaultElement } from '../../index.js'

export class Control extends DefaultElement {
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
