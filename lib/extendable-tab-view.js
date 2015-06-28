'use strict';

var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');
var labels = require('../labels');

var selectableChildMixin = {

	propTypes: {
		newTabLabel: React.PropTypes.string,
		tabLabels: React.PropTypes.array,
		createPanel: React.PropTypes.func.isRequired,
		removePanel: React.PropTypes.func
	},

	getInitialState: function getInitialState() {
		return {
			selected: this.props.initialSelection
		};
	},

	select: function select(selected) {
		this.setState({
			selected: selected
		});
	}
};

var ExtendableTabView = React.createClass({
	displayName: 'ExtendableTabView',

	mixins: [selectableChildMixin],

	propTypes: {
		panelCloser: React.PropTypes.func,
		initialSelection: React.PropTypes.number
	},

	render: function render() {
		var tabs = this.props.tabLabels.map((function (label, index, labels) {
			var removePanel = (function () {
				this.props.removePanel(index);
				this.select(index);
			}).bind(this);
			var selector = (function () {
				this.select(index);
			}).bind(this);
			return React.createElement(
				'li',
				{ onClick: selector, title: this.props.resultTitle ? this.props.resultTitle[index] : null, key: index, className: 'tabItem ' + (this.state.selected === index ? 'selected' : '') },
				React.createElement(
					'a',
					null,
					label
				),
				this.props.deletePanel ? React.createElement(
					'a',
					{ className: 'deletePanel', onClick: removePanel },
					this.props.deletePanel
				) : null
			);
		}).bind(this));

		var panelCreator = (function (index) {
			return (function () {
				this.props.createPanel(index);
				this.select(index);
			}).bind(this);
		}).bind(this);
		if (this.props.tabLabels.length <= 8) {
			tabs.push(React.createElement(
				'li',
				{ className: 'tabItem addNewTab', key: this.props.tabLabels.length },
				React.createElement(
					'a',
					{ onClick: panelCreator(this.props.tabLabels.length) },
					labels.newResult
				)
			));
		}
		return React.createElement(
			'div',
			{ className: 'tabsAndPanels clearfix' },
			React.createElement(
				'ul',
				{ className: 'tabList clearfix' },
				tabs
			),
			React.createElement(TabPanels, { selected: this.state && this.state.selected, tabPanels: this.props.tabPanels })
		);
	}

});

module.exports = ExtendableTabView;