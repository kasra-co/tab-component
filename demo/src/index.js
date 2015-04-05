var React = require( 'react' );
var _ = require('lodash');

// Require index.js from the root of the project. That is where our module's interface is specified.
var ExampleComponent = require( '../..' ).ExampleComponent;
var TabView = require( '../..' ).TabView;
var ExtendableTabView = require( '../..' ).ExtendableTabView;


var Demo = React.createClass({

	getInitialState: function () {
		return {
			Panels: [<p>1b</p>,<p>2b</p>,<p>3b</p>,<p>4b</p>],
			Tabs: ['1','2','3','4']
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

	removePanel: function ( index ) {
		var Panels = _.clone( this.state.Panels );
		var Tabs = _.clone( this.state.Tabs );
		Panels.splice ( index, 1 );
		Tabs.splice ( index, 1 );
		this.setState ({
			Panels: Panels,
			Tabs: Tabs
		});
	},

	render: function() {
		return (
			<div>
				<TabView
					tabLabels={['1','2','3','4']}
					tabPanels={[<p>1a</p>,<p>2a</p>,<p>3a</p>,<p>4a</p>]} />
				<ExtendableTabView
					newTabLabel={ 'new tab' }
					tabLabels={ this.state.Tabs }
					createPanel={ this.createPanel }
					removePanel={ this.removePanel }
					tabPanels={ this.state.Panels }
					deletePanel="close" />
			</div>
		);
	}
});



React.render( <Demo />, document.body );
