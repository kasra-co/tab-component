var React = require('react');
var TabList = require('./tab-list');
var TabPanels = require('./tab-panels');
var labels = require('../labels');

var selectableChildMixin = {

	propTypes: {
		newTabLabel: React.PropTypes.string,
		tabLabels: React.PropTypes.array,
		createPanel: React.PropTypes.func.isRequired,
		removePanel: React.PropTypes.func
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
};

var ExtendableTabView = React.createClass({

	mixins: [
		selectableChildMixin
	],

	propTypes: {
        panelCloser: React.PropTypes.func,
        initialSelection: React.PropTypes.number
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
			return (
				<li onClick={ selector } title={this.props.resultTitle? this.props.resultTitle[index] : null} key={ index } className={"tabItem " + (this.state.selected === index ? "selected": "")}>
					<a >{ label }</a>
					{ this.props.deletePanel? <a className="deletePanel" onClick={ removePanel }>{ this.props.deletePanel }</a> : null }
				</li>
			);

		}.bind(this));

		var panelCreator = function ( index ) {
			return function () {
				this.props.createPanel( index );
				this.select( index );
			}.bind(this);
		}.bind(this);
		if ( this.props.tabLabels.length <= 8) {
			tabs.push( <li className="tabItem addNewTab" key={this.props.tabLabels.length}><a onClick={ panelCreator( this.props.tabLabels.length ) }>{ labels.newResult }</a></li> );
		}
		return (
			<div className="tabsAndPanels clearfix">
				<ul className="tabList clearfix">
					{ tabs }
				</ul>
				<TabPanels selected={ this.state && this.state.selected } tabPanels={ this.props.tabPanels } />
			</div>
		);
	}

});

module.exports = ExtendableTabView;
