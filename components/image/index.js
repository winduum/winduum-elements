import { Controller } from '@hotwired/stimulus'

export class Image extends Controller {
  connectedCallback() {
    const element = this.querySelector('img, video, iframe')

    if (!element) return

    if (element?.complete) this.classList.remove('before:skeleton')
    else if (element?.oncanplay) element.oncanplay = () => this.classList.remove('before:skeleton')
    else if (element?.onload) element.onload = () => this.classList.remove('before:skeleton')
  }
}
