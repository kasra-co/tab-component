var React = require('react');

var TabPanels = module.exports = React.createClass({
	propTypes: {
		tabPanels: React.PropTypes.array.isRequired,
		selected: React.PropTypes.number
	},

	getDefaultProps: function () {
		return {
			selected: 0
		}
	},

	render: function() {
		var tabPanelElements = this.props.tabPanels.map(function(tabPanelElement,index){
			return (<div
				key={index}
				className={"tabPanel" + (this.props.selected === index ? " selected": "")}>
					{ tabPanelElement }
					{ this.props.deletePanel? this.props.deletePanel : null}
				</div>);
		}.bind(this));
		return (
			<div className="tabPanels">
				{ tabPanelElements }
			</div>
		);
	}
});

