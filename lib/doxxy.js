/**
 * @param {function} listener
 * @param {Map} actions
 * @param {string[]} events
 * @param {function} addMethod
 * @param {function} removeMethod
 * @return {function(Node): { action(), unbind() } }
 */
export default ({ listener, actions, events, addMethod, removeMethod }) => {
    /**
     * Doxxy object
     * @param {Node} root
     * @return {{ action(), unbind() }}
     */
    return (root) => {
        /**
         * Add user action event handler
         * @param {string} name
         * @param {function|object} act
         */
        const action = (name, act) => {
            actions.set(name, act);
        };

        /**
         * @param {string} event
         * @param {string} action
         * @param {*} data
         * @return {string}
         */
        const attribute = (event, action, data) => {
            const attribute = [action];
            if (typeof data !== 'undefined') {
                attribute.push(data);
            }
            return `data-event:${event}="${attribute.join(':')}"`;
        };

        const unbind = () =>
            events.forEach(e => root[removeMethod](e, listener));

        events.forEach(e => root[addMethod](e, listener));

        return { action, unbind, attribute };
    };
};
