import _doxxy from "../lib/doxxy.js";

const listener = jest.fn();
const actions = {
    set: jest.fn()
};
const events = [ 'a', 'b' ];
const addMethod = 'add';
const removeMethod = 'remove';

const doxxy = _doxxy({ listener, actions, events, addMethod, removeMethod })

let node = null;
let dx = null;

beforeEach(() => {
    node = {
        add: jest.fn(),
        remove: jest.fn()
    };
    dx = doxxy(node);
});

test('doxxy initialize', () => {
    expect(node.add).toHaveBeenCalledTimes(2);
    expect(node.add.mock.calls).toEqual([
        [ 'a', listener ],
        [ 'b', listener ]
    ]);
});

test('doxxy#action', () => {
    const a = () => {};

    dx.action('a', a);

    expect(actions.set).toHaveBeenCalledWith('a', a);
});

test('doxxy#unbind', () => {
    dx.unbind();

    expect(node.remove).toHaveBeenCalledTimes(2);
    expect(node.remove.mock.calls).toEqual([
        [ 'a', listener ],
        [ 'b', listener ]
    ]);
});
