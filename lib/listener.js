export default ({ getController, findSubscriberInPath }) => {
    /**
     * Proxy function to be bound for event listener
     * @param e
     * @return {*}
     */
    return (e) => {
        const handler = findSubscriberInPath(e);
        if (!handler) return;

        const fn = getController(...handler.split('.'));
        if (typeof fn === 'function') return fn.call(e.target, e);

        console.error(`Cannot find event handler "${handler}" for ${e.type}`);
    };
};
