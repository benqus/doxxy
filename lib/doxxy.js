import _findSubscriberInPath from "./findSubscriberInPath";
import _listener from "./listener";
import _getElementPath from "./getElementPath";
import _discoverPath from "./discoverPath";
import events from "./events";

const method = (typeof document.addEventListener === 'function' ? 'addEventListener' : 'attachEvent');
const actions = new Map();

const getController = (ctrl, fn) => {
    const controller = actions.get(ctrl) || {};
    return (fn ? controller[fn] : controller);
};

const discoverPath = _discoverPath(window);
const getElementPath = _getElementPath({ discoverPath });
const findSubscriberInPath = _findSubscriberInPath({ getElementPath });
const listener = _listener({ getController, findSubscriberInPath });

/**
 * add an event handler
 * @param {string} name
 * @param {function|object} action
 */
const action = (name, action) => {
    actions.set(name, action);
};

events.forEach(e => document[method](e, listener));

export default { action };
