var React = require('react');
var Reflux = require('reflux');
var TabsStore = require('./tabs-store');

var TabPanels = module.exports = React.createClass({
    propTypes: {
        tabPanels: React.PropTypes.array.isRequired
    },
    mixins: [
        Reflux.connect(TabsStore)
    ],

    render: function() {
        var tabPanelElements = this.props.tabPanels.map(function(tabPanelElement,index){
            return (<div
                key={index}
                className={"tabPanel" + (this.state.selected === index ? " selected": "")}>
                    { tabPanelElement }
                </div>);
        }.bind(this));
        return (
            <div className="tabPanels">
                { tabPanelElements }
            </div>
        );
    }
});

