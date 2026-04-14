import { WebuumElement } from 'webuum'

export class Carousel extends WebuumElement {
  static parts = {
    $content: null,
    $counterMin: null,
    $counterMax: null,
    $pagination: null,
    $progress: null,
    $prev: null,
    $next: null,
  }

  $paginationItemContent = '<div class="dot size-2 bg-body-secondary transition data-active:bg-accent cursor-pointer"></div>'

  async connectedCallback() {
    await this.scroll()

    if (this.$pagination) {
      const { paginationCarousel } = await import('winduum/src/components/carousel/index.js')

      paginationCarousel(this.$content, {
        element: this.$pagination,
        itemContent: this.$paginationItemContent,
      })
    }
  }

  async scroll() {
    const { scrollCarousel } = await import('winduum/src/components/carousel/index.js')

    this.toggleScrollAttributes()

    scrollCarousel(this.$content, {
      counterMinElement: this.$counterMin,
      counterMaxElement: this.$counterMax,
      progressElement: this.$progress,
      pagination: {
        element: this.$pagination,
      },
    })
  }

  toggleScrollAttributes() {
    const scrollStart = this.$content.scrollLeft <= 0
    const scrollEnd = this.$content.scrollLeft >= this.$content.scrollWidth - this.$content.clientWidth
    const scrollNone = this.$content.scrollWidth - this.$content.clientWidth === 0

    if (this.$prev && this.$next) {
      this.$prev.disabled = scrollStart
      this.$next.disabled = scrollEnd
    }

    this.toggleAttribute('data-scroll-start', scrollStart)
    this.toggleAttribute('data-scroll-end', scrollEnd)
    this.toggleAttribute('data-scroll-none', scrollNone)
  }

  scrollPrev() {
    this.$content.scroll({ left: this.$content.scrollLeft - this.$content.children[0].offsetWidth })
  }

  scrollNext() {
    this.$content.scroll({ left: this.$content.scrollLeft + this.$content.children[0].offsetWidth })
  }

  async scrollTo({ source }) {
    const { scrollTo } = await import('winduum/src/components/carousel/index.js')

    const siblingElements = [...source.parentElement.children]
    const index = siblingElements.indexOf(source)

    scrollTo(this.$content, index)
  }
}
