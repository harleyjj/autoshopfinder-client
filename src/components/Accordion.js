import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
var createReactClass = require('create-react-class');

var Accordion = createReactClass({

  //Set validation for prop types
  propTypes: {
    transitionTime: PropTypes.number,
    easing: PropTypes.string,
    startPosition: PropTypes.number,
    classParentString: PropTypes.string,
    onTriggerClick: PropTypes.func,
    closeable: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape({
        'data-trigger': PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]).isRequired,
        'data-triggerWhenOpen': PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]),        
        'data-triggerDisabled': PropTypes.bool,
      })
    }))
  },

  getInitialState: function() {

    //Allow the start position to be set by props
    var openPosition = this.props.startPosition | 0;

    return {
      openPosition: openPosition
    }
  },

  handleTriggerClick: function(position) {
    let closeAll = false;

    if (this.props.closeable) {
      closeAll = (!this.state.closeAll && position === this.state.openPosition);
    }

    this.setState({
      openPosition: position,
      closeAll: closeAll,
    });
    //console.log(Object.keys(this.props));
    //this.props.onTriggerClick(position);
  },

  render: function() {

    var nodes = this.props.children.map((node, index) => {

      var triggerWhenOpen = (node.props['data-trigger-when-open']) ? node.props['data-trigger-when-open'] : node.props['data-trigger'];
      var triggerDisabled = (node.props['data-trigger-disabled']) || false;

      return (<Collapsible
                key={"Collapsible"+index}
                handleTriggerClick={this.handleTriggerClick}
                open={(!this.state.closeAll && this.state.openPosition === index)}
                trigger={node.props['data-trigger']}
                triggerWhenOpen={triggerWhenOpen}
                triggerDisabled={triggerDisabled}
                transitionTime={this.props.transitionTime}
                easing={this.props.easing}
                classParentString={this.props.classParentString}
                accordionPosition={index}>{node}</Collapsible>);
    });

    return (<div>{nodes}</div>);
  }

});

export default Accordion;