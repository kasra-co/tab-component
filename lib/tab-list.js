var React = require('react');
var Reflux = require('reflux');
var actions = require('./tabs-actions');
var TabsStore = require('./tabs-store');


var TabList = module.exports = React.createClass({
    propTypes: {
        tabLabels: React.PropTypes.array.isRequired
    },
    mixins: [
        Reflux.connect(TabsStore)
    ],
    getInitialState: function(){
        return {
            selected: false
        };
    },
    clickHandler: function(index){
        return function (){
            actions.tabSelected(index);
        };
    },
    render: function() {
        var tabItems = this.props.tabLabels.map(function(tabItem, index){
            return (<li
                key={index}
                className={"tabItem" + (this.state.selected === index ? " selected": "")}>
                    <a onClick={this.clickHandler(index)}>{ tabItem }</a>
                </li>);
        }.bind(this));
        return (
            <ul className="tabList">
            	{ tabItems }
            </ul>
        );
    }
});

