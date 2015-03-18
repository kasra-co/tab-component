var React = require('react');
var Reflux = require('reflux');
var actions = require('./tabs-actions')


var TabStore = module.exports = Reflux.createStore ({
    listenables:actions,
    tabSelected: function (index) {
        this.trigger({selected:index});
    }
});
