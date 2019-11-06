export default ({ discoverPath }) => {
    /**
     * Returns an array of parent DOM Nodes of event.target, including event target
     *
     * @param {Event} e
     * @return {Node[]|null}
     */
    return (e) => {
        if (e.composedPath) return e.composedPath();
        if (e.path) return e.path;
        return discoverPath(e.target);
    };
};
