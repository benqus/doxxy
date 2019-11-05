import getElementPath from "./getElementPath";
import events from "./events";

const _getController = (ctrl, fn) => {
    const controller = controllers.get(ctrl) || {};
    return (fn ? controller[fn] : controller);
};

// Find first listener Node
const _findSubscriberInPath = (e) => {
    const path = getElementPath(e);
    const attribute = `event:${e.type}`;
    for (let i = 0; i < path.length; i++) {
        if (path[i] === document) break;

        const { dataset } = path[i];
        if (dataset && dataset[attribute]) {
            return dataset[attribute];
        }
    }
    return null;
};

const _listener = e => {
    const handler = _findSubscriberInPath(e);
    if (!handler) return;

    const fn = _getController(...handler.split('.'));
    if (typeof fn === 'function') return fn.call(e.target, e);

    console.error(`Cannot find event handler "${handler}" for ${e.type}`);
};

const method = (typeof document.addEventListener === 'function' ? 'addEventListener' : 'attachEvent');
const controllers = new Map();

events.forEach(e => document[method](e, _listener));

/**
 * add an event handler
 * @param {string} name
 * @param {function|object} controller
 */
const subscribe = (name, controller) => {
    controllers.set(name, controller);
};

export default { subscribe };
