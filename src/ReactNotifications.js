import React from 'react';
import Push from 'push.js';
const shortid = require('shortid');

class ReactNotifications extends React.Component {

  constructor() {
    super();
    this.supported = this.supported.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  supported() {
    if ('Notification' in window) return true;
    else return false;
  }

  show() {
    Push.create(this.props.title, {
      body: this.props.body ? this.props.body : null,
      icon: this.props.icon ? this.props.icon : null,
      tag: this.props.tag ? this.props.tag : shortid.generate(),
      timeout: this.props.timeout ? this.props.timeout : null,
      requireInteraction: this.props.interaction ? this.props.interaction : false,
      onClick: this.props.onClick ? this.props.onClick : null
    })
  }

  close(tag) {
    Push.close(tag);
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default ReactNotifications;
