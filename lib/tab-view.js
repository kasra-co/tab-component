'use strict';

var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');

var TabView = React.createClass({
	displayName: 'TabView',

	propTypes: {
		removePanel: React.PropTypes.func
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'tabsAndPanels clearfix' },
			React.createElement(TabList, { select: this.props.select, selected: this.props.selected, tabLabels: this.props.tabLabels }),
			React.createElement(TabPanels, { deletePanel: this.props.deletePanel, removePanel: this.props.removePanel, selected: this.props.selected, tabPanels: this.props.tabPanels })
		);
	}

});

module.exports = TabView;