import { WebuumElement } from 'webuum'

export class Range extends WebuumElement {
  static parts = {
    $start: null,
    $end: null,
  }

  connectedCallback() {
    this.$controller = new AbortController()
    const { signal } = this.$controller

    this.addEventListener('input', this.setValue, { signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  async setValue({ currentTarget }) {
    const { setValue, setOutputValue, setTrackProperty } = await import('winduum/src/components/range/index.js')

    setValue(currentTarget, {
      track: currentTarget.dataset.track ?? 'start',
    })

    setOutputValue(currentTarget, window[currentTarget.getAttribute('aria-labelledby')])

    setTrackProperty({
      element: this.parentElement,
      value: currentTarget.value,
      min: Number(currentTarget.min) || 0,
      max: Number(currentTarget.max) || 100,
    }, currentTarget.dataset.track ?? 'start')
  }

  partConnectedCallback(name) {
    if (name === '$start') {
      this.setValue({
        currentTarget: this.$start,
      })
    }

    if (name === '$end') {
      this.setValue({
        currentTarget: this.$end,
      })
    }
  }
}
