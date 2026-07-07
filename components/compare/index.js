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

  connectedCallback() {
    const signal = this.$signal

    this.addEventListener('input', this.setPosition.bind(this), { signal })
    this.addEventListener('keydown', this.setKeyboardStep.bind(this), { signal })
    this.addEventListener('mousedown', this.setMouseStep.bind(this), { signal })
  }

  async setPosition({ target }) {
    const { setPosition } = await import('winduum/src/components/compare/index.js')

    setPosition(target, this.$positionOptions)
  }

  async setKeyboardStep({ key, target }) {
    const { setKeyboardStep } = await import('winduum/src/components/compare/index.js')

    setKeyboardStep(target, key, this.$keyboardStep)
  }

  async setMouseStep({ target }) {
    const { setMouseStep } = await import('winduum/src/components/compare/index.js')

    setMouseStep(target, this.$mouseStep)
  }
}
