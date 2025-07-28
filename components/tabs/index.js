import { DefaultElement } from '../../index.js'

export class Tabs extends DefaultElement {
  static parts = {
    $tab: '',
    $tabpanel: '',
  }

  async toggle({ currentTarget }) {
    const { toggleTab } = await import('winduum/src/components/tabs/index.js')

    toggleTab(currentTarget, {
      tabElements: this.$tab,
      tabPanelElements: this.$tabpanel,
    })
  }
}
