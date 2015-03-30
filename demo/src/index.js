var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var ExampleComponent = require( '../..' ).ExampleComponent;
var TabView = require( '../..' ).TabView;

var demo = (
	<div>
		<TabView
		tabLabels={['1','2','3','4']}
		tabPanels={[<p>1a</p>,<p>2a</p>,<p>3a</p>,<p>4a</p>]} />
		<TabView
		tabLabels={['1','2','3','4']}
		tabPanels={[<p>1b</p>,<p>2b</p>,<p>3b</p>,<p>4b</p>]} />
	</div>

);

React.render( demo, document.body );
