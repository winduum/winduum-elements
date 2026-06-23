import { WebuumElement } from 'webuum'

export class Image extends WebuumElement {
  connectedCallback() {
    const element = this.querySelector('img, video, iframe')

    if (!element) return

    const removeSkeleton = () => this.element.classList.remove('before:skeleton')

    if (element.complete) removeSkeleton()
    else if (element instanceof HTMLVideoElement) element.oncanplay = removeSkeleton
    else element.onload = removeSkeleton
  }
}
