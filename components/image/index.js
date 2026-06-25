/**
 * @param {CustomElementConstructor} Element
 */
export const Image = Element => class extends Element {
  connectedCallback() {
    const element = this.querySelector('img, video, iframe')

    if (!element) return

    const removeSkeleton = () => this.classList.remove('before:skeleton')

    if (element.complete) removeSkeleton()
    else if (element instanceof HTMLVideoElement) element.oncanplay = removeSkeleton
    else element.onload = removeSkeleton
  }
}
