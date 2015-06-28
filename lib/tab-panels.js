"use strict";

var React = require("react");

var TabPanels = module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		tabPanels: React.PropTypes.array.isRequired,
		selected: React.PropTypes.number
	},

	render: function render() {
		var tabPanelElements = this.props.tabPanels.map((function (tabPanelElement, index) {
			var removePanel = (function () {
				this.props.removePanel(index);
				this.props.select(index);
			}).bind(this);
			var selector = (function () {
				this.props.select(index);
			}).bind(this);
			return React.createElement(
				"div",
				{
					key: index,
					className: "tabPanel" + (this.props.selected === index ? " selected" : "") },
				tabPanelElement,
				this.props.deletePanel ? React.createElement(
					"a",
					{ onClick: removePanel },
					this.props.deletePanel
				) : null
			);
		}).bind(this));
		return React.createElement(
			"div",
			{ className: "tabPanels" },
			tabPanelElements
		);
	}
});