/**
 * @param {function} getElementPath
 * @return {function(Event): string}
 */
export default ({ getElementPath }) => {
    /**
     * Find first action declared in the event bubble path
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