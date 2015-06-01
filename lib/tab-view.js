var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');

var TabView = React.createClass({

	propTypes: {
		removePanel : React.PropTypes.func
	},

	render: function() {
		return (
			<div className="tabsAndPanels clearfix">
				<TabList select={ this.props.select } selected={ this.props.selected } tabLabels={ this.props.tabLabels } />
				<TabPanels deletePanel={ this.props.deletePanel } removePanel={ this.props.removePanel } selected={ this.props.selected } tabPanels={ this.props.tabPanels } />
			</div>
		);
	}

});

module.exports = TabView;
