export default ({ getElementPath }) => {
    /**
     * Find first Node that declares an event listener
     * @param {Event} e
     * @return {Node[]|null}
     */
    return (e) => {
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
};