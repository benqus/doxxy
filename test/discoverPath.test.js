import _discoverPath from "../lib/discoverPath";

// window stub
const window = {};
const a = {};
const b = { parentNode: a };
const c = { parentNode: b };

const discoverPath = _discoverPath({ window });

test('discoverPath', () => {
    const result = discoverPath(c);
    expect(result).toMatchObject([ c, b, a, window ]);
});
