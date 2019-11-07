import _findActionInPath from "../lib/findActionInPath";

const document = {};
const aNode = {
    dataset: {
        'event:a': 'actionA'
    }
};
const bNode = {
    dataset: {
        'event:b': 'actionB'
    }
};
const path = [ {}, bNode, aNode, document ];
const type = 'a';
const event = { type, path };

const getElementPath = jest.fn();
const findActionInPath = _findActionInPath({ getElementPath, document });

getElementPath.mockReturnValue(path);

test('findActionInPath#compsedPath', () => {
    const result = findActionInPath(event);

    expect(getElementPath).toHaveBeenCalledWith(event);
    expect(result).toStrictEqual('actionA');
});
