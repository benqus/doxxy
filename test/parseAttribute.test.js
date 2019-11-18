import parseAttribute from "../lib/parseAttribute";

test('parseAttribute', () => {
    const attr = parseAttribute('a');
    expect(attr).toEqual([ 'a', undefined, undefined ]);
});

test('parseAttribute', () => {
    const attr = parseAttribute('a.b');
    expect(attr).toEqual([ 'a', 'b', undefined ]);
});

test('parseAttribute', () => {
    const attr = parseAttribute('a.b:c');
    expect(attr).toEqual([ 'a', 'b', 'c' ]);
});
