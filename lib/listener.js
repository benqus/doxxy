/**
 * @param {Map} actions
 * @param {function} findActionInPath
 * @param {function} parseAttribute
 * @param {object} console
 * @return {function(Event)}
 */
export default ({ actions, findActionInPath, parseAttribute, console }) => {
    /**
     * Proxy listener function to be bound for all event listener
     * @param e
     * @return {*}
     */
    return (e) => {
        const attribute = findActionInPath(e);
        if (!attribute) return;

        const [ctrl, fn, data] = parseAttribute(attribute);
        const controller = actions.get(ctrl) || {};
        const exec = (fn ? controller[fn] : controller);
        if (typeof exec === 'function') return exec.call(e.target, e, data);
        console.error(`Cannot find event handler "${attribute}" for ${e.type}`);
    };
};
