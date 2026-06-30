import { WebuumElement } from 'webuum'

export class Range extends WebuumElement {
  static parts = {
    $start: null,
    $end: null,
  }

  connectedCallback() {
    this.addEventListener('input', this.setValue.bind(this), { signal: this.$signal })
  }

  async setValue({ target }) {
    const { setValue, setOutputValue } = await import('winduum/src/components/range/index.js')

    setValue(target, {
      track: target.dataset.track ?? 'start',
    })

    setOutputValue(target, window[target.getAttribute('aria-labelledby')])
  }

  partConnectedCallback(name) {
    if (name === '$start') {
      this.setValue({
        target: this.$start,
      })
    }

    if (name === '$end') {
      this.setValue({
        target: this.$end,
      })
    }
  }
}
