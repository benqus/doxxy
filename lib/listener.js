/**
 * @param {Map} actions
 * @param {function} findActionInPath
 * @return {function(Event)}
 */
export default ({ actions, findActionInPath }) => {
    /**
     * Proxy listener function to be bound for all event listener
     * @param e
     * @return {*}
     */
    return (e) => {
        const handler = findActionInPath(e);
        if (!handler) return;

        const [ctrl, fn] = handler.split('.');
        const controller = actions.get(ctrl) || {};
        const exec = (fn ? controller[fn] : controller);
        if (typeof exec === 'function') return exec.call(e.target, e);
        console.error(`Cannot find event handler "${handler}" for ${e.type}`);
    };
};
