var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var ExampleComponent = require( '../..' ).ExampleComponent;

var demo = (
	<ExampleComponent message='some demo data, just a string in this case'>
		<strong>A React front end module</strong>
	</ExampleComponent>
);

React.render( demo, document.body );
