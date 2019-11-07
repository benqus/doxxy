import index from "../lib/index.js";

const action = () => {};
const unbind = () => {};

test('index', () => {
    const result = index();

    expect(JSON.stringify(result)).toEqual(JSON.stringify({ action, unbind }));
});
