import _listener from "../lib/listener";

const action = jest.fn();
const actions = new Map();
const findActionInPath = jest.fn();
const parseAttribute = jest.fn();
const console = {
    error: jest.fn()
};

const listener = _listener({ actions, findActionInPath, parseAttribute, console });

const type = 'a';
const target = {};
const event = { type, target };

action.mockReturnValue(true);
parseAttribute.mockReturnValue(['actionA']);
actions.set('actionA', action);
findActionInPath.mockReturnValue('actionA');

test('listener - action', () => {
    const result = listener(event);

    expect(action).toHaveBeenCalledTimes(1);
    expect(result).toEqual(true);
});
