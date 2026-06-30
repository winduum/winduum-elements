import { WebuumElement } from 'webuum'

export class Compare extends WebuumElement {
  /**
   * @type {string}
   */
  $keyboardStep

  /**
   * @type {string}
   */
  $mouseStep

  /**
   * @type {import('winduum/src/components/compare/index.d.ts').SetPositionOptions}
   */
  $positionOptions

  static parts = {
    $input: null,
  }

  connectedCallback() {
    const signal = this.$signal

    this.$input.addEventListener('input', this.setPosition, { signal })
    this.$input.addEventListener('keydown', this.setKeyboardStep, { signal })
    this.$input.addEventListener('mousedown', this.setMouseStep, { signal })
  }

  async setPosition({ currentTarget }) {
    const { setPosition } = await import('winduum/src/components/compare/index.js')

    setPosition(currentTarget, this.$positionOptions)
  }

  async setKeyboardStep({ key, currentTarget }) {
    const { setKeyboardStep } = await import('winduum/src/components/compare/index.js')

    setKeyboardStep(currentTarget, key, this.$keyboardStep)
  }

  async setMouseStep({ currentTarget }) {
    const { setMouseStep } = await import('winduum/src/components/compare/index.js')

    setMouseStep(currentTarget, this.$mouseStep)
  }
}
