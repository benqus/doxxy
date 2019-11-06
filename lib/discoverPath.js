export default ({ window }) => {
    /**
     * Mimics Event#composedPath for IE/EDGE - suuuuucks but what can you do... -_-
     * Returns an array of parent DOM Nodes of event.target, including event target
     * @param {Node} target
     * @return {Node[]}
     */
    return (target) => {
        const a = [target];
        let p = target.parentNode;
        while (p) {
            a.push(p);
            p = p.parentNode;
        }
        a.push(window);
        return a;
    };
}
