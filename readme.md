# Tab Component

A basic React tab component with no styling. Uses two components, TabList and TabPanels. When a tab is clicked it adds a "selected" class to both the tab and its associated panel.

To make the demo work you need to add the following styles to your css/scss:

`.tabPanel { display: none; }
.tabPanel.selected { display: block; }`

## Extendable Tabs

Created a new extendable-tab-view component that allows for the dynamic creation and deletion of tabs and panels.

Passes down the following props:

 - newTabLabel={ 'new tab' }
 - tabLabels={ this.state.Tabs }
 - createPanel={ this.createPanel } - func
 - removePanel={ this.removePanel } - func
 - tabPanels={ this.state.Panels }
