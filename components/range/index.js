import { WebuumElement } from 'webuum'

export class Range extends WebuumElement {
  static parts = {
    $start: null,
    $end: null,
  }

  async setValue({ currentTarget, params }) {
    const { setValue, setOutputValue, setTrackProperty } = await import('winduum/src/components/range/index.js')

    setValue(currentTarget, {
      track: params.track ?? 'start',
    })

    setOutputValue(currentTarget, window[currentTarget.getAttribute('aria-labelledby')])

    setTrackProperty({
      element: this.parentElement,
      value: currentTarget.value,
      min: Number(currentTarget.min) || 0,
      max: Number(currentTarget.max) || 100,
    }, params.track ?? 'start')
  }

  // TODO
  async startTargetConnected() {
    await this.setValue({
      currentTarget: this.$start,
      params: {
        track: 'start',
      },
    })
  }

  // TODO
  async endTargetConnected() {
    await this.setValue({
      currentTarget: this.$end,
      params: {
        track: 'end',
      },
    })
  }
}
