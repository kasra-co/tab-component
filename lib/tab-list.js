"use strict";

var React = require("react");

var TabList = module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		tabLabels: React.PropTypes.array.isRequired,
		closePanel: React.PropTypes.func,
		selected: React.PropTypes.number
	},

	getInitialState: function getInitialState() {
		return {
			selected: this.props.selected
		};
	},
	clickHandler: function clickHandler(index) {
		return (function () {
			this.props.select(index);
		}).bind(this);
	},
	render: function render() {
		var tabItems = this.props.tabLabels.map((function (tabItem, index) {
			return React.createElement(
				"li",
				{
					onClick: this.clickHandler(index),
					key: index,
					className: "tabItem" + (this.props.selected === index ? " selected" : "") },
				React.createElement(
					"a",
					null,
					tabItem
				)
			);
		}).bind(this));
		return React.createElement(
			"ul",
			{ className: "tabList clearfix" },
			tabItems
		);
	}
});