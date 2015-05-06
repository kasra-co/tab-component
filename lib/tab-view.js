var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');

var TabView = React.createClass({

	propTypes: {
		removePanel : React.PropTypes.func,
		initialSelection: React.PropTypes.number
	},

	getInitialState: function () {
		return {
			selected: this.props.initialSelection
		};
	},

	select: function (selected) {
		this.setState({
			selected: selected
		});
	},

	render: function() {
		return (
			<div className="tabsAndPanels clearfix">
				<TabList select={ this.select } selected={ this.state && this.state.selected } tabLabels={ this.props.tabLabels } />
				<TabPanels deletePanel={ this.props.deletePanel } removePanel={ this.props.removePanel } selected={ this.state && this.state.selected } tabPanels={ this.props.tabPanels } />
			</div>
		);
	}

});

module.exports = TabView;
