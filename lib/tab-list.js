var React = require('react');


var TabList = module.exports = React.createClass({
    propTypes: {
        tabLabels: React.PropTypes.array.isRequired,
        selected: React.PropTypes.number
    },

    getInitialState: function(){
        return {
            selected: false
        };
    },
    clickHandler: function(index){
        return function (){
            this.props.select(index)
        }.bind(this);
    },
    render: function() {
        var tabItems = this.props.tabLabels.map(function(tabItem, index){
            return (<li
                key={index}
                className={"tabItem" + (this.props.selected === index ? " selected": "")}>
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

