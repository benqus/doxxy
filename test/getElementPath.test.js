import _getElementPath from "../lib/getElementPath";

const discoverPath = jest.fn();
const getElementPath = _getElementPath({ discoverPath });

const path = [];
const target = {};
const mockReturnValue = [];
const composedPath = jest.fn();
composedPath.mockReturnValue(mockReturnValue);

test('getElementPath#compsedPath', () => {
    const result = getElementPath({ composedPath });

    expect(result).toStrictEqual(mockReturnValue);
});

test('getElementPath#path', () => {
    const result = getElementPath({ path });

    expect(result).toStrictEqual(path);
});

test('getElementPath#discoverPath', () => {
    getElementPath({ target });

    expect(discoverPath).toHaveBeenCalled();
    expect(discoverPath).toHaveBeenCalledTimes(1);
    expect(discoverPath).toHaveBeenCalledWith(target);
});
