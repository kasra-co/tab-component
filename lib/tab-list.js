var React = require('react');


var TabList = module.exports = React.createClass({
	propTypes: {
		tabLabels: React.PropTypes.array.isRequired,
		closePanel: React.PropTypes.func,
		selected: React.PropTypes.number
	},

	getInitialState: function(){
		return {
			selected: this.props.selected
		};
	},
	clickHandler: function(index){
		return function() {
			this.props.select(index);
		}.bind(this);
	},
	render: function() {
		var tabItems = this.props.tabLabels.map(function(tabItem, index){
			return (
				<li
					onClick={this.clickHandler(index)}
					key={index}
					className={"tabItem" + (this.props.selected === index ? " selected": "")}>
						<a>{ tabItem }</a>
				</li>);
		}.bind(this));
		return (
			<ul className="tabList clearfix">
				{ tabItems }
			</ul>
		);
	}
});

