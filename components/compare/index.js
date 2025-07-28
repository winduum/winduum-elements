import { DefaultElement } from '../../index.js'

// TODO parts
export class Compare extends DefaultElement {
  static parts = {
    $input: '',
  }

  connectedCallback() {
    this.eventListeners('addEventListener')
  }

  disconnectedCallback() {
    this.eventListeners('removeEventListener')
  }

  eventListeners(method) {
    this.$input[method]('input', this.setPosition)
    this.$input[method]('keydown', this.setKeyboardStep)
    this.$input[method]('mousedown', this.setMouseStep)
  }

  async setPosition({ currentTarget }) {
    const { setPosition } = await import('winduum/src/components/compare/index.js')

    setPosition(currentTarget, arguments[0]?.params)
  }

  async setKeyboardStep({ key, currentTarget }) {
    const { setKeyboardStep } = await import('winduum/src/components/compare/index.js')

    setKeyboardStep(currentTarget, key, arguments[0]?.params?.step)
  }

  async setMouseStep({ currentTarget }) {
    const { setMouseStep } = await import('winduum/src/components/compare/index.js')

    setMouseStep(currentTarget, arguments[0]?.params?.step)
  }
}
