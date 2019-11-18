Doxxy
===

DOM Event Proxy - channel all bubbling events via a proxy listener to controller methods.

Doxxy is a minimalistic, dependency-free tool that allows the markup to change without the event listeners being bound to either the markup or the global context.

This allows more flexibility between user-actions and page rerenders/reflows regardless whether the markup is rendered on the server or the client side.

Consider this basic example:
```html
<!-- html - View -->
<button onclick="onclick">Click me!</button>
```

```js
//js - Controller
function onclick() {
    alert('Hello world!')
}
```
In this case the `onclick` handler is created on and referenced from the global context (`Window`), polluting the global namespace.

With Doxxy, the event listeners are soft-referenced and live in their scope of declaration.

Adding listeners with Doxxy:
```html
<button data-event:click="click">Click me!</button>
```
Script

```js
dx.action('click', e => alert('Hello world!'));
```

This way multiple UI control elements can be channelled through the same event listener.

Doxxy does not conflict with existing frameworks as it is using `data-event:[type]` attribute and does not rely on other dependencies or frameworks.

> *Current development target:* latest browsers

Usage
---

### Setup

```js
import doxxy from 'doxxy';

// initialise a Doxxy on a Node
const dx = doxxy();
```

### Configuration

By default doxxy automatically subscribes the proxy listener to **all** events that bubble up to the `document`` Node.

You can subscribe to a custom Node with custom events

```js
const node = document.createElement('video'); // optional
const events = [ 'canplay', 'timeupdate', 'ended' ]; // optional
const vx = doxxy({ node, events });
```

### Adding user actions

User actions can be either functions or objects grouping together user actions within the same topic

User action as a `function`:

```js
dx.action('hello', e => alert("Hello World!"));
```

User actions as an `object`:

```js
const start = (e) => e.dataTransfer.setData('text/plain', 'hakuna matata');
dx.action('drag', { start });
```

### Proxy/route events to user actions 

Event declaration in the markup's data attribute.

Concept: __Event__ (such as `click`) >> __User Action__ (any predefined user action)

Example

```html
<button data-event:click="hello">Hello World!</button>
```

Or

```html
<div data-event:dragstart="drag.start" draggable="true"></div>
```

### Adding parameters to user actions 

In the attribute value: `[action]:[param]`

```html
<li data-event:click="showItem:0"></li>
```

Or use doxxy attribute generator

```js
const attr = dx.attribute('click', 'showItem', 0);
const html = `<li ${attr}></li>`;
```

### Unbinding Doxxy

```js
dx.unbind();
```
