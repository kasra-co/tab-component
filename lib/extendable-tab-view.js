var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');

var selectableChildMixin = {

	propTypes: {
		newTabLabel: React.PropTypes.string,
		tabLabels: React.PropTypes.array,
		createPanel: React.PropTypes.func.isRequired,
		removePanel: React.PropTypes.func
	},

	getInitialState: function () {
		return { selected: null };
	},

	select: function (selected) {
		this.setState({
			selected: selected
		});
	},

	isSelected: function (index) {
		return index === this.state.selected;
	}

};

var ExtendableTabView = React.createClass({

	mixins: [
		selectableChildMixin
	],

	propTypes: {
        panelCloser: React.PropTypes.func,
        deletePanel: React.PropTypes.string.isRequired
    },

	render: function() {
		var tabs = this.props.tabLabels.map( function (label, index, labels) {
			var removePanel = function () {
				this.props.removePanel(index);
				this.select(index);
			}.bind(this);
			var selector = function () {
				this.select(index);
			}.bind(this);

			return <li key={ index } className={ "tabItem " + ( this.isSelected(index)? "selected" : "" )}><a onClick={ selector }>{ label }</a> <a onClick={ removePanel }>{ this.props.deletePanel }</a></li>;

		}.bind(this));

		var panelCreator = function ( index ) {
			return function () {
				this.props.createPanel( index );
				this.select( index );
			}.bind(this);
		}.bind(this);
		tabs.push( <li className="tabItem addNewTab" key={this.props.tabLabels.length}><a onClick={ panelCreator( this.props.tabLabels.length ) }>New Result</a></li> );
		return (
			<div>
				<ul className="tabList">
					{ tabs }
				</ul>
				<TabPanels selected={ this.state && this.state.selected } tabPanels={ this.props.tabPanels } />
			</div>
		);
	}

});

module.exports = ExtendableTabView;
