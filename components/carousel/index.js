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

    this.$marker.forEach(element => element.addEventListener('click', (event) => {
      event.preventDefault()

      scrollToMarker(this.$content, event.target, this.$markerGroup, this.$vertical
        ? {
            block: 'start',
          }
        : {},
      )
    }))

    this.$content.addEventListener('scrollsnapchanging', (event) => {
      setSnappedAttribute(this.$content, event.snapTargetInline ?? event.snapTargetBlock, this.$markerGroup)
    }, { signal })

    this.$content.addEventListener('scroll', () => {
      const vertical = this.$vertical
        ? {
            scrollStart: this.$content.scrollTop <= 0,
            scrollEnd: this.$content.scrollTop >= this.$content.scrollHeight - this.$content.clientHeight,
            scrollNone: !(this.$content.scrollHeight - this.$content.clientHeight),
          }
        : {}

      toggleScrollState(this.$content, {
        prevElement: this.$prev,
        nextElement: this.$next,
        ...vertical,
      })
    }, { signal })
  }

  disconnectedCallback() {
    this.$controller?.abort()
  }

  async $scroll(direction) {
    const { scrollBy } = await import('winduum/src/components/carousel/index.js')

    const vertical = this.$vertical
      ? {
          distance: this.$content.clientHeight * 0.85,
          position: 'top',
        }
      : {}

    scrollBy(this.$content, {
      direction,
      ...vertical,
    })
  }

  scrollPrev() {
    this.$scroll(-1)
  }

  scrollNext() {
    this.$scroll(1)
  }
}
