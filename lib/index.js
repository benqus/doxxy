import _findActionInPath from "./findActionInPath";
import _getElementPath from "./getElementPath";
import _discoverPath from "./discoverPath";
import _listener from "./listener";
import _doxxy from "./doxxy";
import EVENTS from "./events";

const discoverPath = _discoverPath(window);
const getElementPath = _getElementPath({ discoverPath });
const findActionInPath = _findActionInPath({ getElementPath, document });

const addMethod = (document.addEventListener ? 'addEventListener' : 'attachEvent');
const removeMethod = (document.removeEventListener ? 'removeEventListener' : 'detachEvent');

/**
 * @param {object} options
 * @param {Node} [options.root] - Node to bind the proxy listeners
 * @param {string[]} [options.events] - Array of events to subscribe to
 * @return {{ action(): *, unbind(): * }}
 */
export default (options = {}) => {
    const { node = document, events = EVENTS } = options;
    const actions = new Map();
    const listener = _listener({ actions, findActionInPath });
    return _doxxy({ listener, actions, events, addMethod, removeMethod })(node);
};
