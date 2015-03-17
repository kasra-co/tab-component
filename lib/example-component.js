var React = require( 'react' );

var ExampleComponent = module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Demo</h1>
				<p>{ this.props.message }</p>
				{ this.props.children }
			</div>
		);
	}
});
