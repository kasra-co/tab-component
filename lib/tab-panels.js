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
		var tabPanelElements = this.props.tabPanels.map(function(tabPanelElement,index){
			var removePanel = function () {
				this.props.removePanel(index);
				this.select(index);
			}.bind(this);
			var selector = function () {
				this.select(index);
			}.bind(this);
			return (<div
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

