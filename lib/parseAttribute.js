/**
 * @param {string} attribute
 * @return {[string, string, string]}
 */
export default (attribute) => {
    const [ action, data ] = attribute.split(':');
    const [ controller, fn ] = action.split('.');
    return [ controller, fn, data ];
};
