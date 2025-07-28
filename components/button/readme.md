# [Button](https://winduum.dev/docs/components/button.html)

## Installation
```shell
npm i winduum-elements
```

```js
import { Button } from 'winduum-elements/components/button/index.js'

customElements.define('x-button', Button, { extends: 'button' })
customElements.define('x-button--a', Button, { extends: 'a' })
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Button } from '@/components/ui/button/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/button.html) to learn more and see usage examples.
