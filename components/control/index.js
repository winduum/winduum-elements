import { dispatchCustomEvent } from '@newlogic-digital/utils-js'
import { DefaultElement } from '../../index.js'
import { WebuumElement } from 'webuum'

export class Control extends WebuumElement {
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
