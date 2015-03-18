var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var ExampleComponent = require( '../..' ).ExampleComponent;
var TabList = require( '../..' ).TabList;
var TabPanels = require( '../..' ).TabPanels;

var demo = (
	<div>
		<TabList tabLabels={['1','2','3','4']} />
		<TabPanels tabPanels={[<ExampleComponent />,<ExampleComponent />,<ExampleComponent />,<ExampleComponent />]} />
	</div>
);

React.render( demo, document.body );
