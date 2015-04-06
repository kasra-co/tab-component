var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');

var TabView = React.createClass({

	getInitialState: function () {
		return {
			selected: this.props.initialSelection
		};
	},

	select: function (selected) {
		this.setState({
			selected: this.props.initialSelection? this.props.initialSelection : selected
		});
	},

	render: function() {
		return (
			<div className="tabsAndPanels">
				<TabList select={ this.select } selected={ this.state && this.state.selected } tabLabels={ this.props.tabLabels } />
				<TabPanels selected={ this.state && this.state.selected } tabPanels={ this.props.tabPanels } />
			</div>
		);
	}

});

module.exports = TabView;
