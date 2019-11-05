Doxxy
===

DOM Event Proxy - channel all bubbling events via a proxy listener to controller methods.

> **Note:** Work In Progress - feel free to suggest ideas though :information_desk_person:

Doxxy is a minimalistic tool that allows the markup to change without the event listeners being bound to either the markup or the global context.

This allows more flexibility between user-actions and page rerenders/reflows regardless whether the markup is rendered on the server or the client side.

Consider this basic example:
```html
// html - View
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
doxy.subscribe('click', e => alert('Hello world!'));
```

This way multiple UI control elements can be channelled through the sma event listener.

Doxxy does not conflict with existing frameworks as it is using `data-event:[type]` attribute and does not rely on other dependencies or frameworks.

> *Current development target:* latest browsers

### Usage

Subscribing to events is `on[type] => [type]`

Markup

```html
<button data-event:click="click">Click me</button>
```

Script

```js
import doxy from 'doxy';

doxy.subscribe('click', e => alert(e.target.value));
```
