import { createBundle } from 'dts-buddy'

await createBundle({
  project: 'tsconfig.json',
  output: 'types/index.d.ts',
  modules: {
    'winduum-elements/components/button/index.js': 'components/button/index.js',
    'winduum-elements/components/carousel-experimental/index.js': 'components/carousel-experimental/index.js',
    'winduum-elements/components/carousel/index.js': 'components/carousel/index.js',
    'winduum-elements/components/compare/index.js': 'components/compare/index.js',
    'winduum-elements/components/control/index.js': 'components/control/index.js',
    'winduum-elements/components/details/index.js': 'components/details/index.js',
    'winduum-elements/components/drawer/index.js': 'components/drawer/index.js',
    'winduum-elements/components/field/index.js': 'components/field/index.js',
    'winduum-elements/components/form/index.js': 'components/form/index.js',
    'winduum-elements/components/image/index.js': 'components/image/index.js',
    'winduum-elements/components/popover/index.js': 'components/popover/index.js',
    'winduum-elements/components/range/index.js': 'components/range/index.js',
    'winduum-elements/components/tabs/index.js': 'components/tabs/index.js',
    'winduum-elements/components/toast/index.js': 'components/toast/index.js',
    'winduum-elements/components/toaster/index.js': 'components/toaster/index.js',
  },
})
