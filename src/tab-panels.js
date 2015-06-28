var React = require('react');

var TabPanels = module.exports = React.createClass({
	propTypes: {
		tabPanels: React.PropTypes.array.isRequired,
		selected: React.PropTypes.number
	},

	render: function() {
		var tabPanelElements = this.props.tabPanels.map(function(tabPanelElement,index){
			var removePanel = function () {
				this.props.removePanel(index);
				this.props.select(index);
			}.bind(this);
			var selector = function () {
				this.props.select(index);
			}.bind(this);
			return (
				<div
					key={index}
					className={"tabPanel" + (this.props.selected === index ? " selected": "")}>
						{ tabPanelElement }
						{ this.props.deletePanel? <a onClick={ removePanel }>{ this.props.deletePanel }</a> : null}
				</div>);
		}.bind(this));
		return (
			<div className="tabPanels">
				{ tabPanelElements }
			</div>
		);
	}
});

