import { WebuumElement } from 'webuum'

export class Carousel extends WebuumElement {
  static parts = {
    $content: null,
    $markerGroup: null,
    $marker: null,
    $prev: null,
    $next: null,
  }

  static props = {
    $vertical: false,
  }

  async connectedCallback() {
    const { scrollToMarker, setSnappedAttribute, toggleScrollState } = await import('winduum/src/components/carousel/index.js')

    this.$controller = new AbortController()

    const { signal } = this.$controller

    this.$marker.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault()

        scrollToMarker(this.$content, event.target, this.$markerGroup, this.$vertical ? { block: 'start' } : {})
      }, { signal })
    })

    this.$content.addEventListener('scrollsnapchanging', (event) => {
      setSnappedAttribute(this.$content, event.snapTargetInline ?? event.snapTargetBlock, this.$markerGroup)
    }, { signal })

    this.$content.addEventListener('scroll', () => {
      toggleScrollState(this.$content, {
        prevElement: this.$prev,
        nextElement: this.$next,
        vertical: this.$vertical,
      })
    }, { signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  async $scroll(direction) {
    const { scrollBy } = await import('winduum/src/components/carousel/index.js')

    scrollBy(this.$content, {
      direction,
      vertical: this.$vertical,
    })
  }

  scrollPrev() {
    this.$scroll(-1)
  }

  scrollNext() {
    this.$scroll(1)
  }
}
