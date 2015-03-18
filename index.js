/* This is the interface that we expose to the dependants of this module. It defines this module's interaction with the outside world.

It should only export objects from the ./lib directory.
*/

/* A simple message view. Props:
- children
- message: an optional message that will be shown above the child components.  */
exports.ExampleComponent = require( './lib/example-component' );
exports.TabList = require( './lib/tab-list' );
exports.TabPanels = require( './lib/tab-panels' );

/*
exports.storeName = {} OR exports.stores = {} if there are more than one
exports.actions = require( './lib/actions' );
*/
