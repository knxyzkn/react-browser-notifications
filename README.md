# react-browser-notifications
React component for the [Javascript Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API). The Notifications API allows web pages to control the display of system notifications to the end user. These are outside the top-level browsing context viewport, so therefore can be displayed even when the user has switched tabs or moved to a different app. This component is supported in modern web browsers such as Chrome, Safari, Firefox, Opera, and Edge.


## Demo
[Live Demo](https://react-notif-demo.herokuapp.com/)


## Installation
Using [npm](https://www.npmjs.com/):
```
npm install --save react-browser-notifications
```


## Usage
```javascript
import React from 'react';
import ReactNotifications from 'react-browser-notifications';

class Example extends React.Component {
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification
    if(this.n.supported()) this.n.show();
  }

  handleClick(event) {
    // Do something here such as
    // console.log("Notification Clicked") OR
    // window.focus() OR
    // window.open("http://www.google.com")

    // Lastly, Close the notification
    this.n.close(event.target.tag);
  }

  render() {
    return (
      <div>

        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Hey There!" // Required
          body="This is the body"
          icon="icon.png"
          tag="abcdef"
          timeout="2000"
          onClick={event => this.handleClick(event)}
        />

        <button onClick={this.showNotifications}>
          Notify Me!
        </button>

      </div>
    )
  }
}
```


## Methods
Once you have the reference of `ReactNotifications` by including the `onRef={ref => (this.n = ref)}` prop, you can call the below methods

```javascript
// Returns true if the Notifications API is supported by the browser
this.n.supported()

// Triggers the browser notification
this.n.show()

// Close the notification, which is ID'ed by the tag prop
this.n.close(tag)
```


## Properties
The `ReactNotifications` component accepts the following props

Name  | Type | Req/Opt | Description
--- | --- | --- | ---
`onRef` | function | **Required** | This is required to [reference](https://reactjs.org/docs/refs-and-the-dom.html) the `ReactNotifications` component. **Recommended:** `onRef={ref => (this.n = ref)}`, where n is any variable name
`title` | string | **Required** | Title of the notification
`body` | string | Optional | Text to display in the body of the notification
`icon` | string | Optional | Link to image to be displayed as the icon
`tag` | string | Optional | Unique identifier for the notification. If this is not provided as a prop, an unique [shortid](https://www.npmjs.com/package/shortid) is automatically generated for the notification
`timeout` | string | Optional | Indicates, in milliseconds, the duration for which the notification will remain displayed, if less than the default timeout. Default timeout is dependent on the browser (typically 4s or 5s). Maximum duration is the default timeout
`interaction` | boolean | Optional | *Only available in Chrome*. Setting this to `true` makes the notification remain displayed until the user interacts with the notification (clicks the *Close* button). `timeout` overrides `interaction` if both props are provided
`onClick` | function | Optional | Fired when the notification is clicked


## Browser Support
For up-to-date details on browser compatibility, please visit [caniuse](https://caniuse.com/#search=notifications)


## License
MIT


## Credits
Dependency: [Push.js](https://github.com/Nickersoft/push.js) by [Nickersoft](https://github.com/Nickersoft)
