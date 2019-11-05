
// IE and EDGE - suuuuuuucks but what can you do... -_-
const discoverPath = ({ target }) => {
    const a = [target];
    let p = target.parentNode;
    while (p) {
        a.push(p);
        p = p.parentNode;
    }
    a.push(window);
    return a;
};

export default (e) => {
    if (e.composedPath) return e.composedPath();
    if (e.path) return e.path;
    return discoverPath(e);
};
