var React = require( 'react' );
var _ = require('lodash');

// Require index.js from the root of the project. That is where our module's interface is specified.
var ExampleComponent = require( '../../src' ).ExampleComponent;
var TabView = require( '../../src' ).TabView;
var ExtendableTabView = require( '../../src' ).ExtendableTabView;


var Demo = React.createClass({

	getInitialState: function () {
		return {
			Panels: [<p>1b</p>,<p>2b</p>,<p>3b</p>,<p>4b</p>],
			Tabs: ['1','2','3','4'],
			Panels1: [<p>1a</p>,<p>2a</p>,<p>3a</p>,<p>4a</p>],
			Tabs1: ['1','2','3','4'],
			selected : 0
		};
	},

	createPanel: function ( index ) {
		this.setState ({
			Panels: this.state.Panels.concat(
				<p>new panel { index + 1 }</p>
			),
			Tabs: this.state.Tabs.concat("" + (index + 1))
		});
	},

	removeExtendableTabViewPanel: function ( index ) {
		var Panels = _.clone( this.state.Panels );
		var Tabs = _.clone( this.state.Tabs );
		Panels.splice ( index, 1 );
		Tabs.splice ( index, 1 );
		this.setState ({
			Panels: Panels,
			Tabs: Tabs
		});
	},

	removeTabViewPanel: function ( index ) {
		var Panels1 = _.clone( this.state.Panels1 );
		var Tabs1 = _.clone( this.state.Tabs1 );
		Panels1.splice ( index, 1 );
		Tabs1.splice ( index, 1 );
		this.setState ({
			Panels1: Panels1,
			Tabs1: Tabs1
		});
	},

	select: function (selected) {
		this.setState({
			selected: selected
		});
	},

	render: function() {
		return (
			<div>
				<TabView
					select={ this.select }
					selected={ this.state.selected }
					tabLabels={ this.state.Tabs1 }
					tabPanels={ this.state.Panels1 }
					removePanel={ this.removeTabViewPanel }
					deletePanel={<span>delete them panels</span>} />
				<ExtendableTabView
					newTabLabel={ 'new tab' }
					tabLabels={ this.state.Tabs }
					createPanel={ this.createPanel }
					removePanel={ this.removeExtendableTabViewPanel }
					tabPanels={ this.state.Panels }
					resultTitle={ "test" }
					deletePanel="close"
					initialSelection={ 0 } />
			</div>
		);
	}
});



React.render( <Demo />, document.body );
