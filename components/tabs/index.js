import { WebuumElement } from 'webuum'

export class Tabs extends WebuumElement {
  static parts = {
    $tab: null,
    $tabpanel: null,
  }

  async toggle({ source }) {
    const { toggleTab } = await import('winduum/src/components/tabs/index.js')

    toggleTab(source, {
      tabElements: this.$tab,
      tabPanelElements: this.$tabpanel,
    })
  }
}
